import { EnrollmentStatus, Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  icreatedEnrollment,
  iUpdatedEnrollment,
} from "../../types/enrollements.interface";
import { sendInvoiceEmail } from "../utils/mailer";
import { generateInvoiceTemplate } from "../utils/invoiceTemplate";
const prisma = new PrismaClient();

export const createEnrollement = async (req: Request, res: Response) => {
  try {
    const data: icreatedEnrollment = req.body;

    if (
      !data.userId ||
      !data.courseId ||
      data.isEnrolled === undefined ||
      !data.paymentId ||
      !Object.values(EnrollmentStatus).includes(data.status)
    ) {
      res.status(400).json({
        isSuccess: false,
        message: "validatingError",
      });
      return;
    }
    // check if the user is exists and course is exists
    const existingUser = await prisma.user.findFirst({
      where: {
        id: data.userId,
      },
    });

    if (!existingUser) {
      res.status(404).json({
        isSuccess: false,
        message: "user not existed",
      });
      return;
    }
    const existingCourse = await prisma.course.findFirst({
      where: {
        id: data.courseId,
      },
    });

    if (!existingCourse) {
      res.status(400).json({
        isSuccess: false,
        message: "course is not existed",
      });
      return;
    }
    const activeEnrollmentCheck = await prisma.enrollment.findFirst({
      where: {
        userId: data.userId,
        courseId: data.courseId,
        status: {
          in: ["COMPLETED", "IN_PROGRESS", "PENDING", "PROCESSING"] as any[]
        }
      }
    });

    if (activeEnrollmentCheck) {
      res.status(400).json({
        isSuccess: false,
        message: "User already holds an active or pending enrollment for this course.",
      });
      return;
    }

    const enrollement = await prisma.enrollment.create({
      data: {
        userId: data.userId,
        courseId: data.courseId,
        progress: data.progress,
        status: data.status,
        is_enrolled: data.isEnrolled,
        paymentId: data.paymentId,
      },
      include: {
        course: true,
        users: {
          select: {
            full_name: true,
            profilePhoto: true,
            role: true,
            email: true,
          },
        },
      },
    });

    // ✅ Send invoice email
    const invoiceHtml = generateInvoiceTemplate({
      fullName: enrollement.users.full_name,
      courseImage: enrollement.course.course_img,
      courseTitle: enrollement.course.title,
      price: enrollement.course.price_shl,
      status: enrollement.status,
    });

    await sendInvoiceEmail(
      enrollement.users.email,
      `Your Invoice for ${enrollement.course.title}`,
      invoiceHtml
    );

    res.status(200).json({
      isSuccess: true,
      message: "successfully enrolled",
      enrollement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "server error",
    });
  }
};

export const updateEnrollement = async (req: Request, res: Response) => {
  try {
    const data: iUpdatedEnrollment = req.body;

    if (
      !data.id ||
      !data.userId ||
      !Object.values(EnrollmentStatus).includes(data.status) ||
      data.isEnrolled === undefined ||
      !data.courseId
    ) {
      res.status(401).json({
        isSuccess: false,
        message: "validating error",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!user) {
      res.status(404).json({
        isSuccess: false,
        message: "user not found!",
      });
      return;
    }
    const enrllement = await prisma.enrollment.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!enrllement) {
      res.status(404).json({
        isSuccess: false,
        message: "enrollement not found!",
      });
      return;
    }
    const course = await prisma.course.findUnique({
      where: {
        id: data.courseId,
      },
    });

    if (!course) {
      res.status(404).json({
        isSuccess: false,
        message: "course not found!",
      });
      return;
    }

    // After updating the enrollment

    const completedEnrollement = await prisma.enrollment.update({
      where: { id: data.id },
      data: {
        status: data.status,
        is_enrolled: data.isEnrolled,
        progress: data.isEnrolled ? undefined : 0,
      },
      include: {
        users: { select: { full_name: true, email: true } },
        course: true,
      },
    });

    if (!completedEnrollement.is_enrolled) {
      await prisma.lessonProgress.deleteMany({
        where: {
          userId: completedEnrollement.userId,
          courseId: completedEnrollement.courseId,
        },
      });

      await prisma.enrollment.update({
        where: { id: completedEnrollement.id },
        data: {
          progress: 0,
          status: EnrollmentStatus.IN_PROGRESS,
        },
      });
    }

    // ✅ Send invoice email on update
    const invoiceHtml = generateInvoiceTemplate({
      fullName: completedEnrollement.users.full_name,
      courseImage: completedEnrollement.course.course_img,
      courseTitle: completedEnrollement.course.title,
      price: completedEnrollement.course.price_shl,
      status: completedEnrollement.status,
    });

    await sendInvoiceEmail(
      completedEnrollement.users.email,
      `Update: ${completedEnrollement.course.title} - ${completedEnrollement.status}`,
      invoiceHtml
    );

    res.status(200).json({
      isSuccess: true,
      message: "successfully completed enrollement",
      completedEnrollement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "server error",
    });
  }
};

export const getOneEnroll = async (req: Request, res: Response) => {
  try {
    const { enrollId } = req.params;
    // check if the enrollement is exists
    const existEnrollement = await prisma.enrollment.findFirst({
      where: {
        id: enrollId,
      },
      include: {
        course: true,
        users: true,
      },
    });

    if (!existEnrollement) {
      res.status(404).json({
        isSuccess: false,
        message: "enrollement not found yet!",
      });
      return;
    }

    res.status(200).json({
      isSuccess: true,
      message: "successfully enrolled",
      existEnrollement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "server error",
    });
  }
};

export const getAllEnrollements = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const perPage = Math.max(1, parseInt(req.query.limit as string) || 10);

    const [enrollemnets, total] = await Promise.all([
      prisma.enrollment.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        include: {
          users: {
            select: {
              profilePhoto: true,
              full_name: true,
              email: true,
              phone_number: true,
            },
          },
          course: {
            include: {
              chapters: true,
              lesson: true,
              enrollments: true,
            },
          },
        },
      }),
      prisma.enrollment.count(),
    ]);
    if (!enrollemnets) {
      res.status(404).json({
        isSuccess: false,
        message: "no enrollments has found!",
      });
      return;
    }
    res.status(200).json({
      isSuccess: true,
      message: "successfullt fetched!",
      enrollemnets,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "server error",
    });
  }
};
export const deleteEnroll = async (req: Request, res: Response) => {
  try {
    const { enrollId } = req.params;
    // check if the enrollement is exists
    const existEnrollement = await prisma.enrollment.findFirst({
      where: {
        id: enrollId,
      },
    });

    if (!existEnrollement) {
      res.status(404).json({
        isSuccess: false,
        message: "enrollement not found yet!",
      });
      return;
    }

    await prisma.lessonProgress.deleteMany({
      where: {
        userId: existEnrollement.userId,
        courseId: existEnrollement.courseId,
      },
    });

    const deletingEnroll = await prisma.enrollment.delete({
      where: {
        id: enrollId,
      },
    });
    res.status(200).json({
      isSuccess: true,
      message: "successfully deleted!",
      deletingEnroll,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isSuccess: false,
      message: "server error",
    });
  }
};
