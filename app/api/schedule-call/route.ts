import { sendScheduleCallEmail } from "@/lib/nodemailer";
import { handleFormSubmission } from "@/lib/formHandler";
import { validateScheduleCall } from "@/lib/validation";

export function POST(request: Request) {
  return handleFormSubmission(request, {
    scope: "schedule-call",
    validate: validateScheduleCall,
    send: sendScheduleCallEmail,
    successMessage: "Schedule call request submitted successfully",
  });
}
