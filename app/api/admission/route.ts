import { NextResponse } from 'next/server';
import { sendAdmissionEmail } from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const result = await sendAdmissionEmail(formData);

    if (result.success) {
      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Failed to send email'},
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
} 