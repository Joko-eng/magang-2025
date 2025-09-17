import { connectDB } from "@/lib/connectDB";
import { PostInstagrams } from "@/models/instagram";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        console.log(body);

        await connectDB();

        const newPostInstagram = new PostInstagrams(body);
        await newPostInstagram.save();

        return new Response(JSON.stringify({ message: 'Success creating new Instagram post!', newPostInstagram: newPostInstagram }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
    } 

}

export const GET = async () => {
  try {
    await connectDB();

    const response = await PostInstagrams.find();

    if (!response) {
      throw new Error('Failed while fetching from database.');
    }

    return NextResponse.json({ message: 'success', postInstagrams: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};