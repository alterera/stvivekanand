"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal = ({ content, onClose }: ModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Document preview"
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] md:w-[70%] lg:w-[50%] p-5 rounded-lg shadow-lg relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close document preview"
          className="absolute top-3 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <embed
          src={`${content}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          title="Document preview"
          className="w-full h-[700px]"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default Modal;
