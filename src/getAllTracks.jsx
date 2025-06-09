import axios from 'axios';

async function getAllTracks() {
  try {
    // Include your API key in the request headers
    const response = await axios.get('https://api.evenings.co/v1/tracks/', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    });
    
    const tracks = response.data;
    
    if (!Array.isArray(tracks)) {
      console.error('Expected an array of tracks but received:', typeof tracks);
      return [];
    }
    
    console.log('===== ALL TRACKS =====');
    
    const extractedTracks = tracks.map(track => {
      const extractedData = {
        id: track.id,
        title: track.title,
        weblink: track.url,
        duration: track.duration,
        filetype: track.filetype,
        listens: track.listens,
        cover: track.image
      };
      
      console.log(
        `ID: ${extractedData.id} | Title: ${extractedData.title} | Duration: ${extractedData.duration} | URL: ${extractedData.weblink} | Cover: ${extractedData.cover} | Listens: ${extractedData.listens} | Filetype: ${extractedData.filetype}`
      );
      
      return extractedData;
    });
    
    console.log(`===== TOTAL: ${extractedTracks.length} TRACKS =====`);
    
    return extractedTracks;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    throw error;
  }
}

export { getAllTracks };