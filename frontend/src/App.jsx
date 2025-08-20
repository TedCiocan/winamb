
import Home from "./pages/home/home";
import RootLayout from "./layout/layout";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import { AuthProvider } from "./context/authContext";
function App() {
  
  // const search = async () => {
  //   const res = await fetch(`http://localhost:5005/api/search?q=${encodeURIComponent(query)}`, {
  //     headers: { 'Authorization': `Bearer ${token}` }
  //   });
  //   const data = await res.json();
  //   setTracks(data);
  // };

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>

</AuthProvider>


    // <div className="App">
    //   <h1>🎵 Spotify Search App</h1>
    //   <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
    //   <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
    //   <button onClick={register}>Register</button>
    //   <button onClick={login}>Login</button>

    //   {token && <>
    //     <input placeholder="Search song..." value={query} onChange={e => setQuery(e.target.value)} />
    //     <button onClick={search}>Search</button>

    //     <div className="results">
    //       {tracks.map(track => (
    //         <div key={track.id} className="track">
    //           <img src={track.album.images[0]?.url} alt={track.name} width="100" />
    //           <div>
    //             <strong>{track.name}</strong><br />
    //             {track.artists.map(a => a.name).join(', ')}
    //           </div>
    //           {track.preview_url
    //             ? <audio controls src={track.preview_url}></audio>
    //             : <p>No preview</p>}
    //         </div>
    //       ))}
    //     </div>
    //   </>}
    // </div>
  );
}


export default App;
