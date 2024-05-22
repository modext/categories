import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.TARGET_EMAIL,
    subject: `New Support Message from ${name}`,
    text: message,
  };
  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(null, {
      status: 200,
      statusText: "Email sent successfully",
    });
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: "Failed to send email",
    });
  }
}
