import ProductGrid from '../components/organisms/ProductGrid';
import { products } from '../data/products';

export default function NewArrivals() {
  // Get the latest 6 products (simulating new arrivals)
  const newArrivals = products.slice(0, 6);

  const heroStyle = {
    textAlign: 'center',
    padding: 'clamp(2rem, 5vw, 3rem) 0',
    marginBottom: 'clamp(1rem, 3vw, 2rem)',
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

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 3vw, 1.1rem)',
    color: 'var(--text-secondary)',
    marginTop: '1rem',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '1rem auto 0',
    padding: '0 1rem',
  };

  return (
    <div className="container">
      <div style={heroStyle}>
        <span style={badgeStyle}>✨ Just Landed</span>
        <h1>New Arrivals</h1>
        <p style={subtitleStyle}>
          Check out our latest products - fresh tech and gadgets just for you!
        </p>
      </div>
      <ProductGrid items={newArrivals} />
    </div>
  );
}
