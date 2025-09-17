import { connectDB } from '@/lib/connectDB';
import { Admins } from '@/models/admins';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log(body);

    await connectDB();

    const newAdmin = new Admins(body);
    await newAdmin.save();

    return NextResponse.json({ message: 'Sucess creating new user!', newAdmin: newAdmin });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDB();
    const response = await Admins.find();

    if (!response) {
      throw new Error('Failed while fetching from database.');
    }

    return NextResponse.json({ message: 'success', response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};
