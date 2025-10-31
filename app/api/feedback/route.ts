import { NextResponse } from "next/server";
import { createFeedback } from "@/lib/action/general.action";

export async function POST(req: Request) {
  const data = await req.json();
  const result = await createFeedback(data);
  return NextResponse.json(result);
}
