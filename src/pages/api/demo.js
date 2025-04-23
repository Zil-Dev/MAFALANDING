// /pages/api/enviar-a-script.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }
  
    try {
      // Aquí puedes ajustar los datos que envías
      const { nombre, email, telefono } = req.body;
  
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwWR0MRq8Z2r8wtYLmHv96qY4B775fpKo4f3JDqGlcEJiiKRUEs_IsLujWmSE8d-xkYjA/exec';
  
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ 
            token: process.env.TOKEN,
            nombre, 
            email,
            telefono,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      return res.status(200).json({ ok: true, data });
    } catch (error) {
      console.error('Error en la API de Next.js:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  