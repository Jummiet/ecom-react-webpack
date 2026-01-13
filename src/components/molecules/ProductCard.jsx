
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({product}){
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const cardStyle = {
    border: '1px solid var(--border)',
    borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
    padding: 'clamp(0.75rem, 2vw, 1rem)',
    background: '#fff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const imageWrapperStyle = {
    borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
    overflow: 'hidden',
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
    background: 'var(--bg-secondary)',
    position: 'relative',
    aspectRatio: '4/3',
  };

  const imgStyle = {
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const titleStyle = {
    margin: '0.5rem 0',
    fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
    fontWeight: '600',
    color: 'var(--text)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  };

  const priceStyle = {
    fontWeight: '700',
    fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
    color: 'var(--brand)',
    marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
  };

  return (
    <article 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} style={{color:'inherit', textDecoration:'none', flex: '1', display: 'flex', flexDirection: 'column'}}>
        <div style={imageWrapperStyle}>
          <img 
            src={product.image} 
            alt={product.title} 
            loading="lazy" 
            style={imgStyle}
          />
        </div>
        <h3 style={titleStyle}>{product.title}</h3>
      </Link>
      <p style={priceStyle}>{formatCurrency(product.price)}</p>
      <Button 
        variant={isAdded ? 'primary' : 'accent'} 
        onClick={handleAddToCart}
        aria-label={`Add ${product.title} to cart`}
      >
        {isAdded ? '✓ Added!' : 'Add to cart'}
      </Button>
    </article>
  );
}
