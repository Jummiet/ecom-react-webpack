
import ProductGrid from '../components/organisms/ProductGrid';
import { products } from '../data/products';

export default function Home(){
  const heroStyle = {
    textAlign: 'center',
    padding: 'clamp(2rem, 5vw, 3rem) 0',
    marginBottom: 'clamp(1rem, 3vw, 2rem)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    color: 'var(--text-secondary)',
    marginTop: '1rem',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '1rem auto 0',
    padding: '0 1rem',
  };

  const badgeStyle = {
    display: 'inline-block',
    background: 'var(--gradient-accent)',
    color: '#fff',
    padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
    borderRadius: '2rem',
    fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
    fontWeight: '600',
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    boxShadow: 'var(--shadow)',
  };

  // Show first 8 products on home page
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="container">
      <div style={heroStyle}>
        <span style={badgeStyle}>✨ New Arrivals</span>
        <h1>Discover Tech & Gadget Deals</h1>
        <p style={subtitleStyle}>Explore our curated collection of cutting-edge technology and innovative gadgets</p>
      </div>
      <ProductGrid items={featuredProducts} />
    </div>
  );
}
