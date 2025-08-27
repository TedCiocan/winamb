import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import './search.css';

const API_BASE = "http://localhost:5005/api/v1";

export default function Search() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const { token } = useAuth();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setHasSearched(true);

    try {
      const response = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }

      const data = await response.json();
      setTracks(data.tracks || []);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const playPreview = (previewUrl, trackId) => {
    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if (previewUrl) {
      const audio = new Audio(previewUrl);
      audio.play();
      setCurrentAudio(audio);
      
      // Stop audio when it ends
      audio.addEventListener('ended', () => {
        setCurrentAudio(null);
      });
    }
  };

  const stopPreview = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-header">
          <h1>🎵 Music Search</h1>
          <p>Search for your favorite songs and listen to previews</p>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search for songs, artists, or albums..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button 
              type="submit" 
              disabled={loading || !query.trim()}
              className="search-button"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            <span>❌</span> {error}
          </div>
        )}

        {tracks.length > 0 && (
          <div className="results">
            <h2>Search Results ({tracks.length} tracks)</h2>
            <div className="tracks-grid">
              {tracks.map((track) => (
                <div key={track.id} className="track-card">
                  <div className="track-image">
                    {track.image ? (
                      <img src={track.image} alt={track.name} />
                    ) : (
                      <div className="placeholder-image">🎵</div>
                    )}
                  </div>
                  
                  <div className="track-info">
                    <h3 className="track-name">{track.name}</h3>
                    <p className="track-artists">{track.artists.join(', ')}</p>
                    <p className="track-album">{track.album}</p>
                    <p className="track-duration">{formatDuration(track.duration_ms)}</p>
                  </div>

                  <div className="track-actions">
                    {track.preview_url ? (
                      <div className="audio-controls">
                        <button 
                          onClick={() => playPreview(track.preview_url, track.id)}
                          className="play-button"
                        >
                          ▶️ Preview
                        </button>
                        <button 
                          onClick={stopPreview}
                          className="stop-button"
                        >
                          ⏹️ Stop
                        </button>
                      </div>
                    ) : (
                      <p className="no-preview">No preview available</p>
                    )}
                    
                    <a 
                      href={track.external_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="spotify-link"
                    >
                      🎵 Open in Spotify
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && tracks.length === 0 && hasSearched && (
          <div className="no-results">
            <p>No tracks found for "{query}". Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
