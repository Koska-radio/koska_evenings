import axios from 'axios';

async function getAllTracks() {
  try {
    // Call Netlify Function instead of API directly 
    const response = await axios.get('/.netlify/functions/getTracks');
    
    const tracks = response.data;
    
    // Debug: Log raw API response to identify field values
    if (tracks.length > 0) {
      console.log('Raw API response (first track):', tracks[0]);
      console.log('URL field value:', tracks[0].url);
    }
    
    if (!Array.isArray(tracks)) {
      return [];
    }
    
    const extractedTracks = tracks.map(track => ({
      id: track.id,
      title: track.title,
      // Construct the evenings.fm track page URL using the track ID
      weblink: track.url || `https://evenings.fm/koska-radio/tracks/${track.id}`,
      duration: track.duration,
      filetype: track.filetype,
      listens: track.listens,
      cover: track.image,
      published: track.published
    }));
    
    return extractedTracks.filter(track => track.published !== false);
  } catch (error) {
    console.error('Error fetching tracks:', error);
    throw error;
  }
}

export { getAllTracks };