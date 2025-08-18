import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleAPIViewer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.evenings.co/v1/streams/koska-radio/public/');
        setData(response.data);
        console.log('API Data:', response.data);
      } catch (error) {
        console.error('Error:', error);
        setData({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>evenings.co API Data</h2>
      <pre style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        overflow: 'auto'
      }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default SimpleAPIViewer;