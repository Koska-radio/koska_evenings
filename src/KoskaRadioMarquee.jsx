import React, { useState, useEffect } from 'react';
import './Marquee.css'; // CSS file with same styles as above

const KoskaRadioMarquee = () => {
    const [streamData, setStreamData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.evenings.co/v1/streams/koska-radio/public/');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setStreamData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 3000); // Refresh every 5 minutes
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="loading">Loading stream data...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {streamData.name} -  
                {streamData.name} -  
                {streamData.name} - 
            </div>
        </div>
    );
};

export default KoskaRadioMarquee;