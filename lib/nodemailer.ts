import nodemailer from "nodemailer";
import { escapeHtml } from "./escapeHtml";
import type { AdmissionFormData, ContactFormData, ScheduleCallFormData } from "./validation";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

type Row = [label: string, value: string | undefined];

function renderRows(rows: Row[]) {
  return rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br />")}</p>`,
    )
    .join("\n");
}

async function send({
  subject,
  heading,
  rows,
  replyTo,
}: {
  subject: string;
  heading: string;
  rows: Row[];
  replyTo?: string;
}) {
  try {
    await transporter.sendMail({
      from: `"St. Vivekanand School" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo,
      subject,
      text: rows
        .filter(([, value]) => value)
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n"),
      html: `<h2>${escapeHtml(heading)}</h2>\n${renderRows(rows)}`,
    });
    return { success: true as const };
  } catch (error) {
    console.error(`Error sending "${subject}" email:`, error);
    return { success: false as const };
  }
}

export function sendAdmissionEmail(data: AdmissionFormData) {
  return send({
    subject: "New Admission Form Submission",
    heading: "New Admission Form Submission",
    replyTo: data.email,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Mobile", data.mobile],
      ["City", data.city],
      ["Academic Year", data.academicYear],
      ["Class", data.class],
      ["School Type", data.schoolType],
    ],
  });
}

export function sendScheduleCallEmail(data: ScheduleCallFormData) {
  return send({
    subject: "New Schedule Call Request",
    heading: "New Schedule Call Request",
    rows: [
      ["Student Name", data.studentName],
      ["Class", data.class],
      ["Current School", data.currentSchool],
      ["Guardian Name", data.guardianName],
      ["Contact Number", data.contactNumber],
      ["Address", data.address],
      ["Additional Message", data.message],
    ],
  });
}

export function sendContactEmail(data: ContactFormData) {
  return send({
    subject: "New Contact Form Message",
    heading: "New Contact Form Message",
    replyTo: data.email,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Message", data.message],
    ],
  });
}
