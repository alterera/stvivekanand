import AdmissionForm from "./AdmissionForm";

export default function AdmissionFormSidebar({ className }: { className?: string }) {
  return (
    <div
      className={`w-full p-5 bg-gray-200 h-fit rounded-md sticky top-24 ${className ?? ""}`}
    >
      <AdmissionForm />
    </div>
  );
}
