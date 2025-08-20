import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="fbrand">
        <div className="brand-row">
          <span className="logo">🎵</span><span className="text">MUSIC LAB</span>
        </div>
        <p>
          Utrust is a seamless integration that gives e-commerce businesses the power to accept
          digital currencies – and get all the benefit.
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
