export const HONEYPOT_FIELD = "website";

type FieldRule = {
  label: string;
  required?: boolean;
  max: number;
  pattern?: RegExp;
  patternMessage?: string;
};

type Schema = Record<string, FieldRule>;

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: Record<string, string> };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INDIAN_MOBILE = /^(?:\+?91[-\s]?)?0?[6-9]\d{9}$/;
const PHONE = /^[+\d][\d\s-]{6,15}$/;

function validate<T extends Record<string, string>>(input: unknown, schema: Schema): ValidationResult<T> {
  const source = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const data: Record<string, string> = {};

  for (const [key, rule] of Object.entries(schema)) {
    const raw = source[key];
    const value = typeof raw === "string" ? raw.trim() : "";

    if (!value) {
      if (rule.required) errors[key] = `${rule.label} is required`;
      data[key] = "";
      continue;
    }
    if (value.length > rule.max) {
      errors[key] = `${rule.label} must be at most ${rule.max} characters`;
      continue;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      errors[key] = rule.patternMessage ?? `${rule.label} is invalid`;
      continue;
    }
    data[key] = value;
  }

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: data as T };
}

export function isHoneypotFilled(input: unknown) {
  if (!input || typeof input !== "object") return false;
  const value = (input as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim().length > 0;
}

export type AdmissionFormData = {
  name: string;
  email: string;
  mobile: string;
  city: string;
  academicYear: string;
  class: string;
  schoolType: string;
};

export function validateAdmission(input: unknown) {
  return validate<AdmissionFormData>(input, {
    name: { label: "Name", required: true, max: 100 },
    email: { label: "Email", required: true, max: 150, pattern: EMAIL, patternMessage: "Enter a valid email" },
    mobile: {
      label: "Mobile number",
      required: true,
      max: 16,
      pattern: INDIAN_MOBILE,
      patternMessage: "Enter a valid 10-digit mobile number",
    },
    city: { label: "City", required: true, max: 80 },
    academicYear: { label: "Academic year", required: true, max: 20 },
    class: { label: "Class", required: true, max: 30 },
    schoolType: { label: "School type", required: true, max: 30 },
  });
}

export type ScheduleCallFormData = {
  studentName: string;
  class: string;
  currentSchool: string;
  guardianName: string;
  contactNumber: string;
  address: string;
  message: string;
};

export function validateScheduleCall(input: unknown) {
  return validate<ScheduleCallFormData>(input, {
    studentName: { label: "Student name", required: true, max: 100 },
    class: { label: "Class", required: true, max: 30 },
    currentSchool: { label: "Current school", required: true, max: 150 },
    guardianName: { label: "Guardian name", required: true, max: 100 },
    contactNumber: {
      label: "Contact number",
      required: true,
      max: 16,
      pattern: INDIAN_MOBILE,
      patternMessage: "Enter a valid 10-digit mobile number",
    },
    address: { label: "Address", required: true, max: 300 },
    message: { label: "Message", max: 2000 },
  });
}

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function validateContact(input: unknown) {
  return validate<ContactFormData>(input, {
    name: { label: "Name", required: true, max: 100 },
    email: { label: "Email", required: true, max: 150, pattern: EMAIL, patternMessage: "Enter a valid email" },
    phone: { label: "Phone", max: 16, pattern: PHONE, patternMessage: "Enter a valid phone number" },
    message: { label: "Message", required: true, max: 2000 },
  });
}
