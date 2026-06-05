function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="badge">🚀 Trusted By 500+ Companies</span>

          <h1>
            Build Modern<br />
            Digital Products<br />
            Faster Than Ever
          </h1>

          <p>
            We help startups and businesses create beautiful websites,
            scalable applications and exceptional digital experiences.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Free</button>
            <button className="secondary-btn">Learn More</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <h2>500+</h2>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h2>300+</h2>
              <p>Clients</p>
            </div>
            <div className="stat-item">
              <h2>99%</h2>
              <p>Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to succeed</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance for blazing fast load times</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-level security to keep your data safe</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Real-time insights and detailed reports</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Scale</h3>
            <p>Deploy and scale to any region worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Easy Integration</h3>
            <p>Seamless integration with your existing tools</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support team</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join 500+ companies transforming their digital presence</p>
          <button className="primary-btn large-btn">Start Your Free Trial</button>
        </div>
      </section>
    </>
  );
}

export default Home;