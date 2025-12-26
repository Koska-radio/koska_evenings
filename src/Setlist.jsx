import React, { useState, useEffect } from 'react';
import setlistBg from './images/systmXkoska_waterfall.gif'; // Replace with your actual GIF filename
import './style.css';

const Setlist = () => {
    const [setlistData, setSetlistData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSetlistData = async () => {
            try {
                const response = await fetch('https://api.evenings.co/v1/streams/koska-radio/public/');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                console.log('Setlist API Response:', data);
                console.log('Setlist Description:', data.description);
                setSetlistData(data.description || '');
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSetlistData();
        const interval = setInterval(fetchSetlistData, 15000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div className="setlist-loading">Loading setlist...</div>;
    if (error) return <div className="setlist-error">Error loading setlist: {error}</div>;
    if (!setlistData) return <div className="setlist-error">No setlist data available</div>;

    return (
        <div className="setlist-container">
            <img 
                src={setlistBg} 
                alt="Setlist Background" 
                className="setlist-background-gif"
            />
            <div className="setlist-text-overlay">
                <div className="setlist-scrolling-text">
                    {setlistData}
                </div>
            </div>
        </div>
    );
};

export default Setlist;