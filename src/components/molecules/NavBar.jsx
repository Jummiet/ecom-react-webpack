
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCart } from '../../context/CartContext';

export default function NavBar(){
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  const navStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    fontWeight: '800',
    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
    background: 'var(--gradient-brand)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textDecoration: 'none',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const logoIconStyle = {
    fontSize: '1.5rem',
    background: 'var(--gradient-brand)',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    color: '#fff',
  };

  const centerLinksStyle = {
    display: 'flex',
    gap: 'clamp(1rem, 2vw, 2rem)',
    alignItems: 'center',
    flex: '0 1 auto',
    justifyContent: 'center',
  };

  const searchAndCartStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexShrink: 0,
  };

  const searchWrapperStyle = {
    width: '250px',
    flexShrink: 0,
    position: 'relative',
    zIndex: 1,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    position: 'relative',
    padding: '0.5rem 0',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'var(--brand)',
  };

  const cartLinkStyle = {
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '1.5rem',
    transition: 'all 0.2s ease',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    lineHeight: 1,
    minWidth: '50px',
    height: '40px',
    zIndex: 2,
    marginLeft: '1rem',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    background: '#ef4444',
    color: '#fff',
    borderRadius: '50%',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.65rem',
    fontWeight: '700',
    padding: '0 0.25rem',
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav" aria-label="Primary">
      <style>{`
        @media (max-width: 968px) {
          .nav-wrapper {
            flex-direction: column;
            align-items: stretch !important;
            gap: 1rem !important;
          }
          .nav-center-links {
            order: 2;
            justify-content: center;
            flex-wrap: wrap;
          }
          .nav-search-cart {
            order: 3;
            justify-content: center;
          }
          .nav-search {
            max-width: 100% !important;
          }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--brand);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }
        .nav-link:hover {
          color: var(--brand);
        }
      `}</style>
      <div style={navStyle} className="nav-wrapper">
        <Link to="/" className="logo" style={logoStyle}>
          <div style={logoIconStyle}>🛍️</div>
          <span>M365 Shop</span>
        </Link>
        
        <div style={centerLinksStyle} className="nav-center-links">
          <Link 
            to="/" 
            style={isActive('/') ? activeLinkStyle : linkStyle}
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            style={isActive('/products') ? activeLinkStyle : linkStyle}
            className={`nav-link ${isActive('/products') ? 'nav-link-active' : ''}`}
          >
            Products
          </Link>
          <Link 
            to="/categories" 
            style={isActive('/categories') ? activeLinkStyle : linkStyle}
            className={`nav-link ${isActive('/categories') ? 'nav-link-active' : ''}`}
          >
            Categories
          </Link>
          <Link 
            to="/new-arrivals" 
            style={isActive('/new-arrivals') ? activeLinkStyle : linkStyle}
            className={`nav-link ${isActive('/new-arrivals') ? 'nav-link-active' : ''}`}
          >
            New Arrivals
          </Link>
        </div>

        <div style={searchAndCartStyle} className="nav-search-cart">
          <div style={searchWrapperStyle} className="nav-search">
            <SearchBar />
          </div>
          <Link to="/cart" style={cartLinkStyle}>
            🛒
            {cartCount > 0 && (
              <span style={badgeStyle}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
