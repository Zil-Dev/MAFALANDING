import React from "react";
import ModalWrapper from "./ModalWrapper";

const AppInfoModal = ({ onClose }) => (
  <ModalWrapper onClose={onClose}>
    <h2 className="text-2xl font-bold mb-4">Conoce nuestra App</h2>
    <p>Explora las funciones de POS, CRM y ERP en un solo lugar.</p>
    <video src="/demo-video.mp4" controls className="w-full mt-4 rounded-lg" />
  </ModalWrapper>
);

export default AppInfoModal;
