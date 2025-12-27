import React from "react";
import "./AboutUs.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-header">
            <span className="hero-badge">Est. 2010</span>
            <h1 className="hero-title">
              About Our <span className="highlight">Library System</span>
            </h1>
            <p className="hero-description">
              Empowering education through smart library management and seamless digital experiences
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="content-grid">
            {/* Image Side */}
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <div className="image-card">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop"
                  alt="Modern Library"
                  className="main-image"
                />
                <div className="image-badge">
                  <div className="badge-number">10K+</div>
                  <div className="badge-text">Books Managed</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="content-wrapper">
              <div className="content-badge">WHO WE ARE</div>
              <h2 className="content-title">
                Simplifying Library & Resource Management
              </h2>
              <p className="content-description">
                Our digital Library Management System revolutionizes how institutes manage books,
                automate operations, and provide smarter access to learning materials. From advanced
                cataloging to seamless issuing, every process is optimized for efficiency.
              </p>

              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number blue">500+</div>
                  <div className="stat-label">Institutions</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number cyan">50K+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number blue">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon-box blue-bg">
                <svg className="feature-icon blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="feature-title">Smart Cataloging</h3>
              <p className="feature-text">
                Advanced search algorithms help you find any book in seconds using AI-powered categorization and tagging.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box cyan-bg">
                <svg className="feature-icon cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="feature-title">Automated Alerts</h3>
              <p className="feature-text">
                Smart notification system sends automatic reminders for due dates and late returns, eliminating manual tracking.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box blue-bg">
                <svg className="feature-icon blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="feature-title">Analytics Dashboard</h3>
              <p className="feature-text">
                Real-time insights and detailed reports help you make data-driven decisions for your library operations.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="story-section">
            <div className="story-grid">
              <div className="story-content">
                <span className="story-badge">OUR JOURNEY</span>
                <h2 className="story-title">
                  Transforming Reading Experiences Since 2010
                </h2>
                <div className="story-text-wrapper">
                  <p className="story-text">
                    We began our journey with a simple yet powerful mission — to make libraries smarter,
                    more accessible, and efficient for students, teachers, and educational institutions worldwide.
                  </p>
                  <p className="story-text">
                    Today, our LMS proudly serves hundreds of educational environments with seamless book
                    management, powerful analytics, and a completely paperless approach that's transforming
                    how knowledge is accessed and shared.
                  </p>
                </div>
                <button className="story-button">
                  Learn More About Us
                </button>
              </div>
              <div className="story-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                  alt="Library Team"
                  className="story-image"
                />
                <div className="story-overlay"></div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section" style={{ marginBottom: '100px' }}>
            <h2 className="values-title">Our Core Values</h2>
            <div className="values-grid mb-5" >
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">Pushing boundaries in library tech</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Reliability</h3>
                <p className="value-description">Trusted by institutions worldwide</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3 className="value-title">Simplicity</h3>
                <p className="value-description">Easy-to-use for everyone</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3 className="value-title">Growth</h3>
                <p className="value-description">Continuously evolving platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;