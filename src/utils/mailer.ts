import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or "smtp.mailgun.org", "SendGrid" etc.
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

export const sendInvoiceEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  await transporter.sendMail({
    from: `"E-Learning Platform" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
