import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";

const subscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    subscribers.add(parsed.data.email.toLowerCase());
    return NextResponse.json({ message: "Subscribed successfully." });
  } catch {
    return NextResponse.json({ message: "Unable to subscribe right now." }, { status: 500 });
  }
}
