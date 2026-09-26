import { sendAdmissionEmail } from "@/lib/nodemailer";
import { handleFormSubmission } from "@/lib/formHandler";
import { validateAdmission } from "@/lib/validation";

export function POST(request: Request) {
  return handleFormSubmission(request, {
    scope: "admission",
    validate: validateAdmission,
    send: sendAdmissionEmail,
    successMessage: "Form submitted successfully",
  });
}
