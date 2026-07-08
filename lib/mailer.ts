import nodemailer from "nodemailer";
import { site } from "@/lib/constants";
import type { ContactInput } from "@/lib/validation";

export async function sendContactEmail(data: ContactInput) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!host || !user || !pass) {
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  await transporter.sendMail({
    from: `"${data.name}" <${user}>`,
    replyTo: data.email,
    to,
    subject: `Portfolio inquiry: ${data.subject}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      "",
      data.message
    ].join("\n")
  });

  return { skipped: false };
}
