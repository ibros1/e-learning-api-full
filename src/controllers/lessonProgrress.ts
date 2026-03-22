import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Create or Update Lesson Progress
export const markLessonProgress = async (req: Request, res: Response) => {
  try {
    const { userId, lessonId, courseId, isCompleted } = req.body;

    if (!userId || !lessonId || !courseId) {
      res.status(400).json({
        isSuccess: false,
        message: "Missing required fields",
      });
      return;
    }

    const lesson = await prisma.lessons.findUnique({
      where: { id: lessonId },
      select: { id: true, courseId: true },
    });
    if (!lesson) {
      res.status(404).json({
        isSuccess: false,
        message: "Lesson not found",
      });
      return;
    }

    if (lesson.courseId !== Number(courseId)) {
      res.status(400).json({
        isSuccess: false,
        message: "Lesson does not belong to this course",
      });
      return;
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: Number(userId),
        courseId: Number(courseId),
        is_enrolled: true,
      },
      select: { id: true },
    });

    if (!enrollment) {
      res.status(403).json({
        isSuccess: false,
        message: "You are not enrolled in this course",
      });
      return;
    }

    const progress = await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: { userId: Number(userId), lessonId },
      },
      update: {
        isCompleted,
      },
      create: {
        userId: Number(userId),
        lessonId,
        courseId: Number(courseId),
        isCompleted,
      },
    });

    const [completedCount, totalLessons] = await Promise.all([
      prisma.lessonProgress.count({
        where: {
          userId: Number(userId),
          courseId: Number(courseId),
          isCompleted: true,
        },
      }),
      prisma.lessons.count({
        where: {
          courseId: Number(courseId),
        },
      }),
    ]);

    const progressPercent =
      totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

    await prisma.enrollment.updateMany({
      where: {
        userId: Number(userId),
        courseId: Number(courseId),
      },
      data: {
        progress: progressPercent,
        status: progressPercent >= 100 ? "COMPLETED" : "IN_PROGRESS",
      },
    });

    res.status(200).json({
      isSuccess: true,
      message: "Lesson progress updated",
      progress,
      stats: {
        completedCount,
        totalLessons,
        progressPercent,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "Server error",
    });
  }
};

// Get Progress for One Lesson (per user)
export const getLessonProgress = async (req: Request, res: Response) => {
  try {
    const { userId, lessonId } = req.params;
    const numericUserId = Number(userId);

    if (isNaN(numericUserId)) {
      res.status(400).json({
        isSuccess: false,
        message: "Invalid user ID",
      });
      return;
    }

    const checkUser = await prisma.user.findUnique({
      where: {
        id: numericUserId,
      },
    });

    if (!checkUser) {
      res.status(404).json({
        isSuccess: false,
        message: "User not found!",
      });
      return;
    }

    const checkLesson = await prisma.lessons.findUnique({
      where: {
        id: lessonId,
      },
      select: {
        id: true,
        courseId: true,
      },
    });

    if (!checkLesson) {
      res.status(404).json({
        isSuccess: false,
        message: "Lesson not found!",
      });
      return;
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: numericUserId,
        courseId: checkLesson.courseId,
        is_enrolled: true,
      },
      select: { id: true },
    });

    if (!enrollment) {
      res.status(403).json({
        isSuccess: false,
        message: "You are not enrolled in this course",
      });
      return;
    }

    const progress = await prisma.lessonProgress.findUnique({
      where: {
        userId_lessonId: {
          userId: numericUserId,
          lessonId,
        },
      },
    });

    res.status(200).json({
      isSuccess: true,
      message: "Progress found",
      progress: progress || null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "Server error",
    });
  }
};

// Get All Completed Lessons for a User
export const getCompletedLessons = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const courseId = req.query.courseId
      ? Number(req.query.courseId)
      : undefined;

    const checkUser = await prisma.user.findUnique({
      where: {
        id: +userId,
      },
    });

    if (!checkUser) {
      res.status(404).json({
        isSuccess: false,
        message: "user not found!",
      });
      return;
    }

    if (courseId && Number.isNaN(courseId)) {
      res.status(400).json({
        isSuccess: false,
        message: "Invalid courseId",
      });
      return;
    }

    if (courseId) {
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          userId: Number(userId),
          courseId,
          is_enrolled: true,
        },
        select: { id: true },
      });

      if (!enrollment) {
        res.status(200).json({
          isSuccess: true,
          message: "Not enrolled, progress is empty",
          completed: [],
          stats: {
            completedCount: 0,
            totalLessons: 0,
            progressPercent: 0,
          },
        });
        return;
      }
    }

    const completed = await prisma.lessonProgress.findMany({
      where: {
        userId: Number(userId),
        isCompleted: true,
        ...(courseId ? { courseId } : {}),
      },
      include: {
        lesson: {
          select: {
            courses: {
              select: {
                title: true,
                course_img: true,
                price_dlr: true,
                price_shl: true,
              },
            },
          },
        },
      },
    });

    const totalLessons = courseId
      ? await prisma.lessons.count({ where: { courseId } })
      : 0;
    const completedCount = completed.length;
    const progressPercent =
      courseId && totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

    res.status(200).json({
      isSuccess: true,
      message: "Fetched completed lessons",
      completed,
      stats: {
        completedCount,
        totalLessons,
        progressPercent,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "Server error",
    });
  }
};
