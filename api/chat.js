export default async function handler(request, response) {

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }


  const { contents } = request.body;


  const API_ENDPOINT = process.env.GEMINI_API_ENDPOINT;

  if (!API_ENDPOINT) {
    return response.status(500).json({ error: 'API endpoint not configured' });
  }


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }), 
  };

  try {

    const apiRes = await fetch(API_ENDPOINT, requestOptions);
    const data = await apiRes.json();

    if (!apiRes.ok) {

      return response.status(apiRes.status).json(data);
    }

 
    return response.status(200).json(data);

  } catch (error) {
    console.error('Error fetching from external API:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}