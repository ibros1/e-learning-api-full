// utils/invoiceTemplate.ts
import { EnrollmentStatus } from "@prisma/client";

export function generateInvoiceTemplate({
  fullName,
  courseTitle,
  courseImage,
  price,
  status,
  paymentId,
}: {
  fullName: string;
  courseTitle: string;
  courseImage?: string;
  price: string;
  status: EnrollmentStatus;
  paymentId?: string;
}) {
  let statusMessage = "";

  switch (status) {
    case "IN_PROGRESS":
      statusMessage = "Your enrollment is in progress ✅";
      break;
    case "COMPLETED":
      statusMessage = "Your payment was successful 🎉";
      break;
    case "FAILED":
      statusMessage = "Unfortunately, your payment failed and was cancelled ❌";
      break;
    default:
      statusMessage = "Your enrollment has been updated.";
  }

  const today = new Date().toLocaleDateString();

  return `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 30px;">
    <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      
      <!-- Header with Logo -->
      <div style="background-color: #f3f4f6; text-align: center; padding: 20px;">
        <img src="https://res.cloudinary.com/drgvcohtd/image/upload/v1756720287/real_logo_Surmad_dkekwm.png" alt="FaceTeacher E-Learning" style="height: 60px;" />
      </div>

      <!-- Main Content -->
      <div style="padding: 25px 30px; color: #333;">
        <h2 style="margin: 0 0 15px; font-size: 22px; text-align: center; color: #4f46e5;">Invoice Receipt</h2>
        <p>Hi <strong>${fullName}</strong>,</p>
        <p>${statusMessage}</p>

        <!-- Invoice Details -->
        <div style="margin-top: 25px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 15px; text-align: center; width: 140px;">
                ${
                  courseImage
                    ? `<img src="${courseImage}" alt="${courseTitle}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;" />`
                    : `<div style="width: 120px; height: 120px; border-radius: 8px; background: #e5e7eb;"></div>`
                }
              </td>
              <td style="padding: 15px; vertical-align: top;">
                <p><strong>Course:</strong> ${courseTitle}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Price:</strong> ${price} SLSH</p>
                ${
                  paymentId
                    ? `<p><strong>Payment ID:</strong> ${paymentId}</p>`
                    : ""
                }
                <p><strong>Date:</strong> ${today}</p>
              </td>
            </tr>
          </table>
        </div>

        <!-- Call to Action -->
        <div style="text-align: center; margin-top: 30px;">
          <a href="#" style="display: inline-block; background-color: #4f46e5; color: white; font-weight: bold; padding: 12px 28px; border-radius: 6px; text-decoration: none;">Go to Course</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
        <p>FaceTeacher E-Learning Platform Inc.</p>
        <p>Need help? <a href="mailto:support@example.com" style="color: #4f46e5; text-decoration: none;">Contact Support</a></p>
      </div>
    </div>
  </div>
  `;
}
