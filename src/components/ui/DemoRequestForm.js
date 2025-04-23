import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useDispatch } from "react-redux";
import { addAlerta } from "../../redux/features/alertas";

const DemoRequestForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", telefono: ""});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Previene múltiples clics
    setLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          telefono: form.telefono
        }),
      });

      const data = await res.json();
      dispatch(
        addAlerta({
          title: "Solicitun enviada !!",
          message: "La solicitus fue enviada con exito !!",
          status: "success",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        addAlerta({
          title: "Hubo un Error",
          message:
            "Al parecer no se pudo registrar, intentelo nuevamente en unos minutos.",
          status: "danger",
        })
      );
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
        <input
          className="w-full border rounded-lg p-2"
          placeholder="664-457-8123"
          type="tel"
          value={form.telefono}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          type="submit"
        >
          {loading ? 'Enviando solicitud...' : 'Enviar solicitud'}
        </button>
      </form>
    </ModalWrapper>
  );
};

export default DemoRequestForm;
