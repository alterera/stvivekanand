import React from "react";

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-3/4 max-w-lg">
        <button
          className="absolute top-2 right-2 text-2xl text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          src={content}
          className="w-full h-96"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Modal;
