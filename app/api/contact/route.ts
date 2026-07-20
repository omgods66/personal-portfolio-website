import { NextResponse } from "next/server";
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

    const submitFormResponse = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        subject: parsed.data.subject,
        message: parsed.data.message,
        _subject: `Portfolio inquiry: ${parsed.data.subject}`,
        _template: "table",
        _captcha: "false"
      })
    });

    if (!submitFormResponse.ok) {
      return NextResponse.json({ message: "Unable to submit the form right now." }, { status: 502 });
    }

    return NextResponse.json({
      message: "Form submitted successfully."
    });
  } catch {
    return NextResponse.json({ message: "Unable to send message right now." }, { status: 500 });
  }
}
