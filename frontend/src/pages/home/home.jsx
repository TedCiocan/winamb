import "./home.css";

import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
    
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Intuitive. Powerful. Runs everywhere</p>
          <h1>Open the world of music.<br/>It’s all here.</h1>
         
        </div>
        <img
          className="hero-shot"
          src="https://preview.colorlib.com/theme/musiclab/assets/img/hero/hero-desktop.png.webp"
          alt="App desktop"
          loading="lazy"
        />
      </section>

    
      <section className="about about-a">
        <div className="about-media">
          <img
            src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/about1.png.webp"
            alt="About app"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <h2>Listen to a personalized mix of tracks</h2>
          <ul className="bullets">
            <li><span>01</span> Reduce unnecessary spend with real-time insights into every penny spent.</li>
            <li><span>02</span> Curated mixes that adapt to your mood and day.</li>
            <li><span>03</span> Save favorites and build playlists in seconds.</li>
          </ul>
        </div>
      </section>

      {/* ABOUT 2 */}
      <section className="about about-b">
        <div className="about-text">
          <h2>We are tender heart charity foundation.</h2>
          <div className="cards">
            <div className="card">Reduce unnecessary spend with real time insights into every penny spent.</div>
            <div className="card">Reduce unnecessary spend with real time insights into every penny spent.</div>
            <div className="card">Reduce unnecessary spend with real time insights into every penny spent.</div>
          </div>
        </div>
        <div className="about-media">
          <img
            src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/about2.png.webp"
            alt="About 2"
            loading="lazy"
          />
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="strip">
        <h2>Get ready for seamless online music</h2>
        <p className="sub">
          Utrust is a seamless integration that gives e-commerce businesses the power to accept digital currencies – and get all the benefits you can’t with just traditional payment methods.
        </p>
        <div className="icons">
          <div className="icon">
            <img src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic1.png.webp" alt="" />
            <h4>Offline mode.</h4><p>Save and listen anywhere.</p>
          </div>
          <div className="icon">
            <img src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic2.png.webp" alt="" />
            <h4>High quality audio.</h4><p>Enjoy the full range of sound.</p>
          </div>
          <div className="icon">
            <img src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic3.png.webp" alt="" />
            <h4>No ads.</h4><p>Enjoy nonstop music.</p>
          </div>
          <div className="icon">
            <img src="https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic4.png.webp" alt="" />
            <h4>Unlimited skips.</h4><p>Just tap skip.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (simple static) */}
      <section className="testimonials">
        <h2>Customers are loving Winamb</h2>
        <div className="grid">
          <article className="tcard">
            <header>
              <img src="https://i.pravatar.cc/64?img=12" alt="" />
              <div>
                <strong>Holly Graham</strong>
                <small>CEO at Creativelab</small>
              </div>
            </header>
            <p>OMG! I cannot believe that I have got a brand new landing page after getting @Winamb…</p>
          </article>
          <article className="tcard">
            <header>
              <img src="https://i.pravatar.cc/64?img=32" alt="" />
              <div>
                <strong>Mary Christmas</strong>
                <small>CEO at Creativelab</small>
              </div>
            </header>
            <p>OMG! I cannot believe that I have got a brand new landing page after getting @Winamb…</p>
          </article>
          <article className="tcard">
            <header>
              <img src="https://i.pravatar.cc/64?img=22" alt="" />
              <div>
                <strong>John Carter</strong>
                <small>Product Lead</small>
              </div>
            </header>
            <p>Design is slick, performance is great and playlists sync instantly across devices.</p>
          </article>
        </div>
      </section>

      

    </main>
  );
}
