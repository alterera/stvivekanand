import { NextResponse } from 'next/server';
import { sendScheduleCallEmail } from '@/lib/nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['studentName', 'class', 'currentSchool', 'guardianName', 'contactNumber', 'address'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendScheduleCallEmail(formData);

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { message: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Schedule call request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing schedule call request:', error);
    return NextResponse.json(
      { message: 'Failed to process schedule call request' },
      { status: 500 }
    );
  }
} 