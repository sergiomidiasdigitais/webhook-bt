export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const payload = req.body;
      
      // Imprime os dados recebidos nos logs da Vercel
      console.log("Evento recebido com sucesso:", JSON.stringify(payload, null, 2));
      
      // Responde HTTP 200 rápido para a plataforma não dar timeout
      return res.status(200).json({ status: 'success', message: 'Webhook recebido' });
    } catch (error) {
      console.error("Erro ao processar webhook:", error);
      return res.status(500).json({ status: 'error', message: 'Erro interno' });
    }
  }

  // Se tentarem aceder via GET no navegador
  return res.status(405).json({ message: 'Método não permitido. Use POST.' });
}
