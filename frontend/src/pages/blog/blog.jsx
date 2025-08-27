import React from 'react';
import './blog.css';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Winamb: A Journey into Modern Web Development",
      date: "August 25, 2025",
      category: "Development",
      excerpt: "Discover how we built Winamb using React, Node.js, and the Spotify API to create the ultimate music discovery platform.",
      content: "When we set out to build Winamb, our goal was simple: create a seamless music discovery experience that bridges the gap between searching and listening. Using modern web technologies like React for the frontend and Node.js with Express for the backend, we've crafted a platform that's both powerful and intuitive.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Power of Spotify API Integration",
      date: "August 20, 2025",
      category: "API",
      excerpt: "Learn how we integrated Spotify's powerful API to bring millions of tracks to your fingertips with real-time search and preview capabilities.",
      content: "Spotify's Web API is a treasure trove for music developers. With access to millions of tracks, artist information, and 30-second previews, it's the perfect foundation for any music application. Our integration focuses on search functionality and preview playback, ensuring users can discover and sample music effortlessly.",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Security First: Implementing JWT Authentication",
      date: "August 15, 2025",
      category: "Security",
      excerpt: "A deep dive into how we implemented secure user authentication using JSON Web Tokens and bcrypt password hashing.",
      content: "Security is paramount in any modern web application. We implemented JWT (JSON Web Tokens) for stateless authentication, combined with bcrypt for secure password hashing. This approach ensures user data remains protected while providing a smooth login experience.",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Responsive Design: Music for Every Device",
      date: "August 10, 2025",
      category: "Design",
      excerpt: "How we created a mobile-first design that delivers an exceptional music experience across all screen sizes.",
      content: "In today's multi-device world, responsive design isn't optional—it's essential. Our mobile-first approach ensures Winamb looks and works beautifully whether you're on a smartphone, tablet, or desktop. Every component is carefully crafted to adapt seamlessly to different screen sizes.",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "MongoDB and Modern Data Management",
      date: "August 5, 2025",
      category: "Database",
      excerpt: "Exploring how we use MongoDB for flexible user data storage and efficient session management in Winamb.",
      content: "MongoDB's document-based approach perfectly suits our needs for user management and session storage. Its flexibility allows us to evolve our data structure as Winamb grows, while its performance ensures fast authentication and user data retrieval.",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "The Future of Music Discovery",
      date: "August 1, 2025",
      category: "Vision",
      excerpt: "Our roadmap for upcoming features including playlists, social sharing, and AI-powered music recommendations.",
      content: "Winamb is just getting started. Our roadmap includes exciting features like personal playlists, social music sharing, and AI-powered recommendations. We're building the future of music discovery, one feature at a time.",
      readTime: "2 min read"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-container">
        {/* Hero Section */}
        <section className="blog-hero">
          <h1>🎵 Winamb Blog</h1>
          <p>Insights, tutorials, and updates from the Winamb development team</p>
        </section>

        {/* Featured Post */}
        <section className="featured-post">
          <div className="featured-content">
            <span className="featured-badge">Featured Post</span>
            <h2>{blogPosts[0].title}</h2>
            <div className="post-meta">
              <span className="date">{blogPosts[0].date}</span>
              <span className="category">{blogPosts[0].category}</span>
              <span className="read-time">{blogPosts[0].readTime}</span>
            </div>
            <p>{blogPosts[0].content}</p>
            <button className="read-more-btn">Read Full Article</button>
          </div>
          <div className="featured-image">
            <div className="code-preview">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">searchTracks</span> = <span className="keyword">async</span> (<span className="parameter">query</span>) =&gt; &#123;
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="keyword">const</span> <span className="variable">response</span> = <span className="keyword">await</span> <span className="function">fetch</span>(
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">`/api/v1/search?q=$&#123;query&#125;`</span>
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;);
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;<span className="keyword">return</span> <span className="variable">response</span>.<span className="function">json</span>();
                </div>
                <div className="code-line">
                  &#125;;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="blog-posts">
          <h2>Latest Articles</h2>
          <div className="posts-grid">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-header">
                  <span className="category-tag">{post.category}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="date">{post.date}</span>
                  <button className="read-link">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <div className="newsletter-content">
            <h3>🚀 Stay Updated</h3>
            <p>Get notified about new features, tutorials, and development insights</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
