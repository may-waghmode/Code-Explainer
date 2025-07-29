import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
  const code = await req.json;

  if (!code) {
    return NextResponse.json({
      error: "Node code provided",
      status: 400,
    });
  }

  //   const response = await
}
