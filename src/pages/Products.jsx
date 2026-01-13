
import { useState, useMemo } from 'react';
import ProductGrid from '../components/organisms/ProductGrid';
import { products } from '../data/products';

export default function Products(){
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = selectedCategory === 'all' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    switch(sortBy) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price);
      case 'name':
        return [...result].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return result;
    }
  }, [selectedCategory, sortBy]);

  const filterStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem',
    background: '#fff',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow-sm)',
  };

  const selectStyle = {
    padding: '0.6rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    fontSize: '0.95rem',
    cursor: 'pointer',
    background: '#fff',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    fontWeight: '600',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  };

  const countStyle = {
    marginLeft: 'auto',
    color: 'var(--muted)',
    fontSize: '0.9rem',
  };

  return (
    <div className="container">
      <h1>All Products</h1>
      
      <div style={filterStyle}>
        <div>
          <label htmlFor="category" style={labelStyle}>Category: </label>
          <select 
            id="category"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={selectStyle}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort" style={labelStyle}>Sort by: </label>
          <select 
            id="sort"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            style={selectStyle}
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <span style={countStyle}>
          {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
        </span>
      </div>

      <ProductGrid items={filteredAndSortedProducts} />
    </div>
  );
}
