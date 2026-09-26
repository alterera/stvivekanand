import { sendContactEmail } from "@/lib/nodemailer";
import { handleFormSubmission } from "@/lib/formHandler";
import { validateContact } from "@/lib/validation";

export function POST(request: Request) {
  return handleFormSubmission(request, {
    scope: "contact",
    validate: validateContact,
    send: sendContactEmail,
    successMessage: "Message sent successfully",
  });
}
