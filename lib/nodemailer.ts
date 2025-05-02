import nodemailer from 'nodemailer';

interface AdmissionFormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  academicYear: string;
  class: string;
  schoolType: string;
}

interface ScheduleCallFormData {
  studentName: string;
  class: string;
  currentSchool: string;
  guardianName: string;
  contactNumber: string;
  address: string;
  message?: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendAdmissionEmail = async (formData: AdmissionFormData) => {
  const mailOptions = {
    from: `"St. Vivekanand School" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Admission Form Submission',
    html: `
      <h2>New Admission Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>Academic Year:</strong> ${formData.academicYear}</p>
      <p><strong>Class:</strong> ${formData.class}</p>
      <p><strong>School Type:</strong> ${formData.schoolType}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export async function sendScheduleCallEmail(formData: ScheduleCallFormData) {
  const mailOptions = {
    from: `"St. Vivekanand School" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Schedule Call Request',
    html: `
      <h2>New Schedule Call Request</h2>
      <p><strong>Student Name:</strong> ${formData.studentName}</p>
      <p><strong>Class:</strong> ${formData.class}</p>
      <p><strong>Current School:</strong> ${formData.currentSchool}</p>
      <p><strong>Guardian Name:</strong> ${formData.guardianName}</p>
      <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      ${formData.message ? `<p><strong>Additional Message:</strong> ${formData.message}</p>` : ''}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending schedule call email:', error);
    return { success: false, error };
  }
} 