"use client";

import { useState } from "react";

const categories = [
  { name: "Beauty", icon: "✦", accent: "pink" },
  { name: "Home", icon: "⌂", accent: "gold" },
  { name: "Digital", icon: "⊞", accent: "purple" },
  { name: "Fashion", icon: "◌", accent: "red" },
  { name: "Wellness", icon: "❋", accent: "green" },
  { name: "Lifestyle", icon: "☼", accent: "blue" },
];

const featuredStores = [
  { name: "North & Pine", tag: "Home goods", sales: "18.4k orders" },
  { name: "Velvet Theory", tag: "Beauty & wellness", sales: "12.7k orders" },
  { name: "Signal Studio", tag: "Creators & digital", sales: "9.8k orders" },
];

const products = [
  { name: "Handmade ceramic vase", price: "$79", rating: "4.9", badge: "Bestseller" },
  { name: "Digital planning bundle", price: "$29", rating: "4.8", badge: "New" },
  { name: "Glow face serum", price: "$54", rating: "4.9", badge: "Top rated" },
  { name: "Minimal desk set", price: "$61", rating: "4.7", badge: "Trending" },
];

const steps = [
  { title: "Launch your storefront", text: "Create a branded shop with your own products, values, and categories." },
  { title: "Reach buyers nationwide", text: "Get discovered through discoverability, category placement, and social commerce." },
  { title: "Manage growth", text: "Track orders, communicate with shoppers, and scale with analytics and admin tools." },
];

const testimonials = [
  { quote: "Social Marketplace gave our boutique a polished storefront and a real growth engine without giving up our brand identity.", author: "Ariana Stone", title: "Founder, North & Pine" },
  { quote: "The platform feels premium and easy to use. We can sell, track, and optimize everything from one place.", author: "Marcus Bell", title: "Owner, Signal Studio" },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <div className="brand-name">Social Marketplace</div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#categories">Categories</a>
            <a href="#stores">Stores</a>
            <a href="#how-it-works">How it works</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-light">Log in</button>
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Built for creators, brands, and independent sellers</div>
              <h1>Sell smarter with a marketplace designed for modern commerce.</h1>
              <p>
                Social Marketplace brings independent sellers, businesses, and creators together in one premium platform built for the United States market.
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary large">Open your store</button>
                <button className="btn btn-secondary large">Browse products</button>
              </div>

              <div className="stats-row">
                <div>
                  <strong>24K+</strong>
                  <span>buyers</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>seller rating</span>
                </div>
                <div>
                  <strong>$3.8M</strong>
                  <span>monthly volume</span>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="mini-card accent-one">
                <div className="mini-icon">✦</div>
                <div>
                  <small>Top store</small>
                  <strong>North & Pine</strong>
                </div>
              </div>

              <div className="showcase-card">
                <div className="product-visual">👜</div>
                <div className="showcase-copy">
                  <span className="tag">Bestseller</span>
                  <h3>Handmade Ceramic Vase</h3>
                  <div className="meta-row">
                    <span>4.9 stars</span>
                    <strong>$79</strong>
                  </div>
                </div>
              </div>

              <div className="mini-stack">
                <div className="mini-stat">
                  <strong>1100+</strong>
                  <span>new products</span>
                </div>
                <div className="mini-stat">
                  <strong>92%</strong>
                  <span>repeat buyers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Explore the marketplace</div>
                <h2>Discover categories built for everyday discovery.</h2>
              </div>
              <a href="#" className="text-link">View all categories</a>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article key={category.name} className={`category-card ${category.accent}`}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>Curated collections and handcrafted essentials for your next favorite find.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-bg" id="stores">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Featured storefronts</div>
                <h2>Top-performing shops and independent brands.</h2>
              </div>
            </div>

            <div className="stores-grid">
              {featuredStores.map((store) => (
                <article className="store-card" key={store.name}>
                  <div className="store-avatar">{store.name.charAt(0)}</div>
                  <div className="store-body">
                    <h3>{store.name}</h3>
                    <p>{store.tag}</p>
                    <div className="store-meta">
                      <span>{store.sales}</span>
                      <button className="text-button">View store</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-heading center">
              <div className="eyebrow">How it works</div>
              <h2>Everything you need to build and grow your business.</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-bg">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Best sellers</div>
                <h2>Premium products customers are already loving.</h2>
              </div>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className="product-thumb">{product.name.includes("Digital") ? "📘" : "🧴"}</div>
                  <div className="product-topline">
                    <span className="tag">{product.badge}</span>
                    <span className="rating">★ {product.rating}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <button className="btn btn-primary small">Buy now</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="section-heading center">
              <div className="eyebrow">Customer stories</div>
              <h2>Why sellers and shoppers stay with Social Marketplace.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote className="testimonial" key={item.author}>
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.author}</strong>
                    <span>{item.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-box">
            <div>
              <div className="eyebrow light">Ready to grow?</div>
              <h2>Launch your storefront and start selling with confidence.</h2>
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn-primary">Join now</button>
            </form>

            {submitted ? <div className="form-success">Thanks! We’ll be in touch with your launch checklist.</div> : null}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>
            <div className="brand-wrap">
              <div className="brand-mark">S</div>
              <div className="brand-name">Social Marketplace</div>
            </div>
            <p>Premium marketplace infrastructure for independent sellers and growing brands.</p>
          </div>

          <div className="footer-links">
            <a href="#">Marketplace</a>
            <a href="#">Vendors</a>
            <a href="#">Support</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
