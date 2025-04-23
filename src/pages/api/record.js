// /pages/api/record.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }
  
    try {
      // Aquí puedes ajustar los datos que envías
      const { email } = req.body;
  
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbx8GGlhgJVa5n9uOWPsuE5Dq3ShqO8B0ZTRpA82RMgirEdk55z0sMziF34dvkK5j2McyQ/exec';
  
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ 
            token: process.env.TOKEN,
            email,
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
  