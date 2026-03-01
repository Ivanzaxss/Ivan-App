export default async function handler(req, res) {
  // Aquí es donde Vercel busca tu llave secreta
  const apiKey = process.env.GEMINI_API_KEY; 
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Solo se permite POST' });
  }

  try {
    // Aquí va la lógica para conectar con Gemini
    // (Asegúrate de tener instalada la librería @google/generative-ai)
    res.status(200).json({ mensaje: "El servidor sí responde" });
  } catch (error) {
    res.status(500).json({ error: "Error interno" });
  }
}
