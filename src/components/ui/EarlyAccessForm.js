import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addAlerta, addNotification, setAlertas } from "../../redux/features/alertas";

const EarlyAccessForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Previene múltiples clics
    setLoading(true);

    try {
      const res = await fetch('/api/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
        }),
      });
    
      const data = await res.json();

      dispatch(addAlerta({
        title: "Registrado !!",
        message: "Se registro con exito !!",
        status: "success"
      }))

    } catch (error) {
      console.error(error)
      dispatch(addAlerta({
        title: "Hubo un Error",
        message: "Al parecer no se pudo registrar, intentelo nuevamente en unos minutos.",
        status: "danger"
      }))
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
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg" type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarme'}
        </button>
      </form>
    </ModalWrapper>
  );
};

export default EarlyAccessForm;
