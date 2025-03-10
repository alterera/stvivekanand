import React from "react";

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] p-5 rounded-lg shadow-lg relative">
        <button
          className="absolute top-3 right-4 text-lg font-bold text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <embed
          src={`${content}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          className="w-full h-[700px]"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default Modal;
