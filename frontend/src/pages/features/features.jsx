import React from 'react';
import './features.css';

export default function Features() {
  return (
    <div className="features-page">
      <div className="features-container">
        {/* Hero Section */}
        <section className="features-hero">
          <h1>🎵 MusicLab Features</h1>
          <p>Discover everything that makes MusicLab the perfect platform for music lovers</p>
        </section>

        {/* Main Features Grid */}
        <section className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Music Search</h3>
            <p>Search through millions of tracks using our Spotify-powered search engine. Find any song, artist, or album instantly.</p>
            <ul>
              <li>Real-time search results</li>
              <li>Advanced filtering options</li>
              <li>Artist and album discovery</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎧</div>
            <h3>Preview Playback</h3>
            <p>Listen to 30-second previews of any track before deciding what to play. No commitment, just pure discovery.</p>
            <ul>
              <li>High-quality audio previews</li>
              <li>Instant playback controls</li>
              <li>No buffering delays</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Your account is protected with JWT-based authentication and secure password hashing.</p>
            <ul>
              <li>Encrypted user data</li>
              <li>Secure login sessions</li>
              <li>Password protection</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Enjoy MusicLab on any device - desktop, tablet, or mobile. Our responsive design adapts to your screen.</p>
            <ul>
              <li>Mobile-first approach</li>
              <li>Touch-friendly controls</li>
              <li>Consistent experience</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Lightning Fast</h3>
            <p>Built with modern technologies for blazing-fast performance and seamless user experience.</p>
            <ul>
              <li>React-powered frontend</li>
              <li>Optimized API calls</li>
              <li>Instant page loads</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Spotify Integration</h3>
            <p>Direct integration with Spotify means you can seamlessly transition from discovery to full listening.</p>
            <ul>
              <li>One-click Spotify links</li>
              <li>Real-time track data</li>
              <li>Album artwork display</li>
            </ul>
          </div>
        </section>

        {/* Technical Features */}
        <section className="tech-features">
          <h2>Technical Excellence</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>🔧 Modern Tech Stack</h4>
              <p>Built with React, Node.js, Express, and MongoDB for reliability and scalability.</p>
            </div>
            <div className="tech-item">
              <h4>🌐 RESTful API</h4>
              <p>Clean, well-documented API endpoints for seamless data communication.</p>
            </div>
            <div className="tech-item">
              <h4>💾 MongoDB Database</h4>
              <p>Flexible NoSQL database for efficient user and session management.</p>
            </div>
            <div className="tech-item">
              <h4>🎨 Custom CSS</h4>
              <p>Beautiful, custom-designed interface with smooth animations and transitions.</p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="coming-soon">
          <h2>🚀 Coming Soon</h2>
          <div className="coming-soon-grid">
            <div className="coming-soon-item">
              <h4>📝 Personal Playlists</h4>
              <p>Create and manage your own custom playlists</p>
            </div>
            <div className="coming-soon-item">
              <h4>❤️ Favorite Tracks</h4>
              <p>Save your favorite songs for quick access</p>
            </div>
            <div className="coming-soon-item">
              <h4>🤝 Social Sharing</h4>
              <p>Share your discoveries with friends</p>
            </div>
            <div className="coming-soon-item">
              <h4>🎵 Genre Explorer</h4>
              <p>Discover new music by exploring different genres</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
