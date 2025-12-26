const axios = require('axios');

exports.handler = async function(event, context) {
  // CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Access environment variables at runtime (server-side only)
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL || 'https://api.evenings.co/v1';

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      };
    }

    // Make authenticated request to evenings.co API
    const response = await axios.get(`${apiUrl}/tracks/`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    // Return the data to the frontend
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error fetching tracks:', error.message);
    
    return {
      statusCode: error.response?.status || 500,
      headers,
      body: JSON.stringify({
        error: error.message,
        details: error.response?.data || 'Unknown error occurred',
      }),
    };
  }
};
