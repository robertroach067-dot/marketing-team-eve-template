"use client";

import { useState } from "react";

const categories = [
  { name: "Home & Living", icon: "⌂", accent: "amber" },
  { name: "Beauty & Care", icon: "✦", accent: "rose" },
  { name: "Digital Goods", icon: "◫", accent: "violet" },
  { name: "Fashion", icon: "◌", accent: "red" },
  { name: "Wellness", icon: "❋", accent: "green" },
  { name: "Office & Studio", icon: "▣", accent: "slate" },
];

const stores = [
  { name: "North & Pine", tag: "Home goods", sales: "18.4k orders" },
  { name: "Velvet Theory", tag: "Beauty & self care", sales: "12.7k orders" },
  { name: "Signal Studio", tag: "Creators & digital", sales: "9.8k orders" },
];

const products = [
  { name: "Stoneware Dinner Set", price: "$89", rating: "4.9", badge: "Best seller" },
  { name: "Digital Planner Kit", price: "$29", rating: "4.8", badge: "New" },
  { name: "Vitamin C Serum", price: "$46", rating: "4.9", badge: "Top rated" },
  { name: "Leather Desk Tray", price: "$64", rating: "4.7", badge: "Trending" },
];

const steps = [
  { title: "Create your store", text: "Set up a storefront, add products, and define your brand in a few steps." },
  { title: "Reach ready-to-buy shoppers", text: "Show up in categories and discoverability tools built for modern shopping behavior." },
  { title: "Manage orders and growth", text: "Track fulfillment, customer communication, and revenue without juggling multiple tools." },
];

const testimonials = [
  { quote: "We launched our boutique in less than a week and started converting from day one. The platform feels premium without being complicated.", author: "Ariana Stone", title: "Founder, North & Pine" },
  { quote: "The quality of the buyer experience matters. Social Marketplace gives us a storefront that feels established, not patchworked together.", author: "Marcus Bell", title: "Owner, Signal Studio" },
  { quote: "We moved from a basic Etsy setup to a more professional storefront and saw better repeat customers almost immediately.", author: "Nia Patel", title: "Brand Director, Velvet Theory" },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: any) => {
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
              <div className="eyebrow">Marketplace for growing brands and independent sellers</div>
              <h1>Build a storefront that looks established and sells with confidence.</h1>
              <p>
                Social Marketplace helps brands, creators, and small businesses launch online stores, manage customer relationships, and grow sales in a modern digital marketplace built for the United States market.
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary large">Open your store</button>
                <button className="btn btn-secondary large">Browse products</button>
              </div>

              <div className="stats-row">
                <div>
                  <strong>24K+</strong>
                  <span>active shoppers</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>seller rating</span>
                </div>
                <div>
                  <strong>$3.8M</strong>
                  <span>monthly sales</span>
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
                  <span className="tag">Best seller</span>
                  <h3>Stoneware Dinner Set</h3>
                  <div className="meta-row">
                    <span>4.9 rating</span>
                    <strong>$89</strong>
                  </div>
                </div>
              </div>

              <div className="mini-stack">
                <div className="mini-stat">
                  <strong>1,100+</strong>
                  <span>new listings</span>
                </div>
                <div className="mini-stat">
                  <strong>92%</strong>
                  <span>repeat buyers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section trust-bar">
          <div className="container trust-row">
            <span>Trusted across home, beauty, wellness, and digital categories</span>
            <div className="trust-logos">
              <strong>North & Pine</strong>
              <strong>Velvet Theory</strong>
              <strong>Signal Studio</strong>
              <strong>Gather & Co.</strong>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Popular categories</div>
                <h2>Find what shoppers are already buying.</h2>
              </div>
              <a href="#" className="text-link">View all categories</a>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article key={category.name} className={`category-card ${category.accent}`}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                  <p>Handpicked products and curated collections designed for modern buying habits.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-bg" id="stores">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Featured stores</div>
                <h2>Independent brands with momentum.</h2>
              </div>
            </div>

            <div className="stores-grid">
              {stores.map((store) => (
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
              <h2>Launch and grow without the technical overhead.</h2>
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
                <h2>Premium products customers return for.</h2>
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
              <div className="eyebrow">What sellers say</div>
              <h2>Built for real businesses, not just storefront demos.</h2>
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
              <h2>Launch your store and start selling with a more professional foundation.</h2>
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

            {submitted ? <div className="form-success">Thanks. We’ll send a launch checklist and next steps.</div> : null}
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
            <p>Marketplace infrastructure for independent brands, local makers, and modern digital sellers.</p>
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
