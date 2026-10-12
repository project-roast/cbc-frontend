
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="home-navbar">
        <h2 className="home-logo">MyWebsite</h2>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>MyWebsite</span>
          </h1>

          <p>
            Discover a simple and modern platform
            designed to make your experience better.
          </p>

          <div className="hero-buttons">
            <Link to="/Login" className="hero-btn primary-btn">
              Get Started
            </Link>

            <a href="#about" className="hero-btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
            alt="Modern workspace"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features" id="about">
        <h2>Why Choose Us?</h2>

        <p className="features-description">
          Everything you need in one place.
        </p>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>
              Enjoy a simple and user-friendly experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>
              Build your experience with security in mind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovative</h3>
            <p>
              Explore useful features with a modern design.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
