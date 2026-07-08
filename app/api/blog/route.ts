import { NextResponse } from "next/server";
import { blogPosts } from "@/data/blogs";

export async function GET() {
  return NextResponse.json(blogPosts);
}
