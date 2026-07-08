import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";
import { site } from "@/lib/constants";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please check the form fields.", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(parsed.data);

    if (result.skipped) {
      const submitFormResponse = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...parsed.data,
          _subject: `Portfolio inquiry: ${parsed.data.subject}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (!submitFormResponse.ok) {
        return NextResponse.json({ message: "Unable to submit the form right now." }, { status: 502 });
      }
    }

    return NextResponse.json({
      message: "Form submitted successfully."
    });
  } catch {
    return NextResponse.json({ message: "Unable to send message right now." }, { status: 500 });
  }
}
