import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Categories() {
  // Get unique categories with product counts
  const categoryData = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 0,
        image: product.image,
      };
    }
    acc[category].count++;
    return acc;
  }, {});

  const categories = Object.values(categoryData);

  const categoryCardStyle = {
    position: 'relative',
    borderRadius: '1rem',
    overflow: 'hidden',
    height: '250px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: 'var(--shadow)',
  };

  const categoryImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const categoryOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    padding: '2rem 1.5rem 1.5rem',
    color: '#fff',
  };

  const categoryTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '0 0 0.5rem 0',
  };

  const categoryCountStyle = {
    fontSize: '0.95rem',
    opacity: 0.9,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  };

  return (
    <div className="container">
      <h1>Shop by Category</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Browse our carefully curated collections
      </p>

      <div style={gridStyle}>
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.name}`}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={categoryCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img src={category.image} alt={category.name} style={categoryImageStyle} />
              <div style={categoryOverlayStyle}>
                <h2 style={categoryTitleStyle}>{category.name}</h2>
                <p style={categoryCountStyle}>
                  {category.count} {category.count === 1 ? 'product' : 'products'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
