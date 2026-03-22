import {
  Currency,
  PaymentMethod,
  PaymentStatus,
  PrismaClient,
} from "@prisma/client";
import { Request, Response } from "express";
import {
  iCreatedPayment,
  iUpdatedPayment,
} from "../../types/payment.interface";
const prisma = new PrismaClient();

export const createPayment = async (req: Request, res: Response) => {
  try {
    const userPayment = req.body as iCreatedPayment;
    const data: iCreatedPayment = req.body;

    if (
      !data.userId ||
      !data.courseId ||
      !data.amount ||
      !data.currency ||
      !data.phoneNumber ||
      !Object.values(PaymentStatus).includes(data.status) ||
      !Object.values(PaymentMethod).includes(data.payment_method) ||
      !Object.values(Currency).includes(data.currency)
    ) {
      res.status(400).json({
        isSuccess: false,
        message: "payment needs valid requirements",
      });
      return;
    }

    const userId = await prisma.user.findFirst({
      where: {
        id: data.userId,
      },
    });
    if (!userId) {
      res.status(404).json({
        isSuccess: false,
        message: "no user found!",
      });
      return;
    }
    const courseId = await prisma.course.findFirst({
      where: {
        id: data.courseId,
      },
    });
    if (!courseId) {
      res.status(404).json({
        isSuccess: false,
        message: "no course found!",
      });
      return;
    }

    const activeEnrollment = await prisma.enrollment.findFirst({
      where: {
        userId: data.userId,
        courseId: data.courseId,
        status: {
          in: ["COMPLETED", "IN_PROGRESS", "PENDING", "PROCESSING"] as any[]
        }
      }
    });

    if (activeEnrollment) {
      res.status(400).json({
        isSuccess: false,
        message: "User already has an active or pending enrollment for this course.",
      });
      return;
    }

    const payment = await prisma.payment.create({
      data: {
        userId: data.userId,
        courseId: data.courseId,
        enrollementId: data.enrollementId,
        phone_Number: data.phoneNumber,

        amount: data.amount,
        currency: data.currency,
        status: data.status,
        isEnrolled: data.isEnrolled,
        payment_method: data.payment_method,
      },
      include: {
        user: {
          select: {
            full_name: true,
            email: true,
            profilePhoto: true,
            role: true,
          },
        },
        course: true,
      },
    });

    res.status(201).json({
      isSuccess: true,
      message: "successfully created payment",
      payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to create payment",
    });
  }
};
export const updatePayment = async (req: Request, res: Response) => {
  try {
    const data: iUpdatedPayment = req.body;
    console.log(data);
    if (
      !data.id ||
      data.isEnrolled === undefined ||
      !Object.values(PaymentStatus).includes(data.status)
    ) {
      res.status(400).json({
        isSuccess: false,
        message: "validating error",
      });
      return;
    }

    const checkPayment = await prisma.payment.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!checkPayment) {
      res.status(404).json({
        isSuccess: false,
        message: "payment not found!",
      });
      return;
    }

    const updatedPayment = await prisma.payment.update({
      where: {
        id: data.id,
      },
      data: {
        status: data.status,
        isEnrolled: data.isEnrolled,
      },
      include: {
        user: {
          select: {
            full_name: true,
            email: true,
            profilePhoto: true,
            role: true,
          },
        },
        course: true,
      },
    });

    res.status(201).json({
      isSuccess: true,
      message: "Success",
      updatedPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to create payment",
    });
  }
};
export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.params;
    const payment = await prisma.payment.findUnique({
      where: {
        id: paymentId,
      },
      include: {
        user: {
          select: {
            full_name: true,
            email: true,
            profilePhoto: true,
            role: true,
          },
        },
        course: true,
      },
    });
    if (!payment) {
      res.status(404).json({
        isSuccess: false,
        message: "no payment found!",
      });
      return;
    }
    res.status(200).json({
      isSuccess: true,
      message: "success",
      payment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to retrieve payment",
    });
  }
};

export const getAllPayments = async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const perPage = Math.max(1, parseInt(req.query.limit as string) || 10);

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        include: {
          user: {
            select: {
              full_name: true,
              email: true,
              profilePhoto: true,
              role: true,
            },
          },
          course: true,
        },
      }),
      prisma.payment.count(),
    ]);
    if (!payments) {
      res.status(400).json({
        isSuccess: false,
        message: "no payment found yet!",
      });
      return;
    }
    res.status(200).json({
      isSuccess: true,
      message: "success",
      payments,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to retrieve payments",
    });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.params;
    const payment = await prisma.payment.findUnique({
      where: {
        id: paymentId,
      },
    });
    if (!payment) {
      res.status(404).json({
        isSuccess: false,
        message: "no payment found!",
      });
      return;
    }
    const deletingPayment = await prisma.payment.delete({
      where: {
        id: paymentId,
      },
    });
    res.status(200).json({
      isSuccess: false,
      message: "successfully deleted payment!",
      deletingPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to delete payment",
    });
  }
};
