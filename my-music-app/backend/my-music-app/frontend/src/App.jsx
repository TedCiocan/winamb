import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState('');

  const register = async () => {
    const res = await fetch('http://localhost:5005/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  const login = async () => {
    const res = await fetch('http://localhost:5005/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.token) setToken(data.token);
    else alert(data.error);
  };

  const search = async () => {
    const res = await fetch(`http://localhost:5005/api/search?q=${encodeURIComponent(query)}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    setTracks(data);
  };

  return (
    <div className="App">
      <h1>🎵 Spotify Search App</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>

      {token && <>
        <input placeholder="Search song..." value={query} onChange={e => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>

        <div className="results">
          {tracks.map(track => (
            <div key={track.id} className="track">
              <img src={track.album.images[0]?.url} alt={track.name} width="100" />
              <div>
                <strong>{track.name}</strong><br />
                {track.artists.map(a => a.name).join(', ')}
              </div>
              {track.preview_url
                ? <audio controls src={track.preview_url}></audio>
                : <p>No preview</p>}
            </div>
          ))}
        </div>
      </>}
    </div>
  );
}

export default App;
