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