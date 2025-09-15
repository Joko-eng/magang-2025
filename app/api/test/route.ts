import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";

export async function GET() {
  try {
    const conn = await connectDB();
    return NextResponse.json({ success: true, message: "Database connected!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export const POST = () => {
  try {
    return NextResponse.json({ message: 'sukses POST!!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};