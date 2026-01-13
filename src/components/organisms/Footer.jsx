
import { Link } from 'react-router-dom';

export default function Footer(){
  const year = new Date().getFullYear();
  
  const footerStyle = {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border)',
    marginTop: 'auto',
    padding: '1.5rem 0 0.75rem',
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1rem',
  };

  const footerSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const footerTitleStyle = {
    fontWeight: '700',
    fontSize: '1rem',
    marginBottom: '0.25rem',
    color: 'var(--text)',
  };

  const footerLinkStyle = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  };

  const logoStyle = {
    fontWeight: '800',
    fontSize: '1.25rem',
    background: 'var(--gradient-brand)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem',
  };

  const socialIconStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    border: '1px solid var(--border)',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const newsletterStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.5rem',
  };

  const inputStyle = {
    flex: 1,
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    fontSize: '0.9rem',
    outline: 'none',
  };

  const subscribeButtonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    background: 'var(--brand)',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    fontSize: '0.9rem',
  };

  const bottomBarStyle = {
    borderTop: '1px solid var(--border)',
    paddingTop: '0.75rem',
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
  };

  const heartStyle = {
    color: '#ef4444',
    display: 'inline-block',
    animation: 'heartbeat 1.5s ease-in-out infinite',
  };

  const paymentIconsStyle = {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.75rem',
    flexWrap: 'wrap',
  };

  const paymentIconStyle = {
    padding: '0.4rem 0.75rem',
    background: '#fff',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  };

  return (
    <footer style={footerStyle}>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .footer-link:hover {
          color: var(--brand);
        }
        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
          border-color: var(--brand);
        }
        .subscribe-btn:hover {
          background: var(--brand-dark);
        }
      `}</style>
      
      <div className="container">
        <div style={footerGridStyle}>
          {/* About Section */}
          <div style={footerSectionStyle}>
            <div style={logoStyle}>M365 Shop</div>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5'}}>
              Your destination for cutting-edge technology and innovative gadgets. Quality products, competitive prices.
            </p>
            <div style={socialLinksStyle}>
              <div style={socialIconStyle} className="social-icon" title="Facebook">📘</div>
              <div style={socialIconStyle} className="social-icon" title="Twitter">🐦</div>
              <div style={socialIconStyle} className="social-icon" title="Instagram">📷</div>
              <div style={socialIconStyle} className="social-icon" title="LinkedIn">💼</div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>Quick Links</h3>
            <Link to="/" style={footerLinkStyle} className="footer-link">Home</Link>
            <Link to="/products" style={footerLinkStyle} className="footer-link">All Products</Link>
            <Link to="/cart" style={footerLinkStyle} className="footer-link">Shopping Cart</Link>
            <Link to="/checkout" style={footerLinkStyle} className="footer-link">Checkout</Link>
          </div>

          {/* Customer Service */}
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>Customer Service</h3>
            <a href="#" style={footerLinkStyle} className="footer-link">Contact Us</a>
            <a href="#" style={footerLinkStyle} className="footer-link">Shipping Info</a>
            <a href="#" style={footerLinkStyle} className="footer-link">Returns Policy</a>
            <a href="#" style={footerLinkStyle} className="footer-link">FAQ</a>
            <a href="#" style={footerLinkStyle} className="footer-link">Track Order</a>
          </div>

          {/* Newsletter */}
          <div style={footerSectionStyle}>
            <h3 style={footerTitleStyle}>Newsletter</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
              Subscribe for exclusive deals and updates!
            </p>
            <form style={newsletterStyle} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={inputStyle}
                required
              />
              <button 
                type="submit" 
                style={subscribeButtonStyle}
                className="subscribe-btn"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={paymentIconsStyle}>
          <span style={paymentIconStyle}>💳 Visa</span>
          <span style={paymentIconStyle}>💳 Mastercard</span>
          <span style={paymentIconStyle}>💳 Amex</span>
          <span style={paymentIconStyle}>💰 PayPal</span>
          <span style={paymentIconStyle}>🍎 Apple Pay</span>
          <span style={paymentIconStyle}>🤖 Google Pay</span>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyle}>
          <p>
            &copy; {year} M365 E‑commerce · Built with <span style={heartStyle}>❤️</span> using React
          </p>
          <p style={{marginTop: '0.5rem', fontSize: '0.85rem'}}>
            <a href="#" style={{...footerLinkStyle, marginRight: '1rem'}} className="footer-link">Privacy Policy</a>
            <a href="#" style={{...footerLinkStyle, marginRight: '1rem'}} className="footer-link">Terms of Service</a>
            <a href="#" style={footerLinkStyle} className="footer-link">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
