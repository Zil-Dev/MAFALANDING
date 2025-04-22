import React from "react";

const ModalWrapper = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
    <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-lg relative">
      <button onClick={onClose} className="absolute top-2 right-4 text-gray-500 text-xl">×</button>
      {children}
    </div>
  </div>
);

export default ModalWrapper;
