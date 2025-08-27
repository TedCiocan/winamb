import "./footer.css";
import Logo from "../logo/logo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="fbrand">
        <div className="brand-row">
          <Logo size="medium" showText={true} />
        </div>
        <p>
          Winamb is a seamless music discovery platform that gives music lovers the power to search, preview, and discover millions of tracks with Spotify integration.
        </p>
        
      </div>
      <div className="fcols">
        <div>
          <h5>Quick Links</h5>
          <a href="#w">Work</a><a href="#s">Services</a><a href="#p">Products</a><a href="#t">Tips & Tricks</a>
        </div>
        <div>
          <h5>Support</h5>
          <a href="/">Home</a><a href="#a">About</a><a href="/features">Services</a><a href="/blog">Blog</a>
        </div>
        <div>
          <h5>Navigation</h5>
          <a href="#w2">Work</a><a href="#s2">Services</a><a href="#p2">Products</a><a href="#t2">Tips & Tricks</a>
        </div>
      </div>
        </div>

    </footer>
  );
}
