import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

const EarlyAccessForm = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: form.email, 
        }),
      });
    
      const data = await res.json();
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      console.error(error)
    }
    

    onClose(); 
  };

  return (
    <ModalWrapper onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">Accede antes que nadie 🚀</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg p-2"
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg" type="submit">
          Registrarme
        </button>
      </form>
    </ModalWrapper>
  );
};

export default EarlyAccessForm;
