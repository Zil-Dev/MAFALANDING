import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

const DemoRequestForm = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nombre: form.name,
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
      <h2 className="text-2xl font-bold mb-4">Solicita una Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg p-2"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border rounded-lg p-2"
          placeholder="Correo electrónico"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg" type="submit">
          Enviar solicitud
        </button>
      </form>
    </ModalWrapper>
  );
};

export default DemoRequestForm;
