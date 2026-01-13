// Import necessary hooks and components
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import formatCurrency from '../utils/formatCurrency';
import Button from '../components/atoms/Button';

/**
 * ProductDetail page - Displays detailed information about a specific product
 * Shows product image, title, price, description, stock status, and add to cart button
 */
export default function ProductDetail() {
  // Get product ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // State for quantity selector and add to cart feedback
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  // Find the product in the products array by matching ID
  const product = products.find(p => p.id === parseInt(id));

  // Handle case where product doesn't exist
  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
          Product Not Found
        </h1>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Sorry, the product you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }

  // Handle adding product to cart
  const handleAddToCart = () => {
    // Add the specified quantity of products to cart
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Show success feedback
    setAdded(true);
    // Reset feedback after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrement quantity (minimum 1)
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      {/* Breadcrumb navigation */}
      <div style={{ 
        marginBottom: '2rem', 
        fontSize: '0.9rem', 
        color: 'var(--text-secondary)' 
      }}>
        <span 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer', color: 'var(--primary)' }}
        >
          Home
        </span>
        {' / '}
        <span 
          onClick={() => navigate('/products')} 
          style={{ cursor: 'pointer', color: 'var(--primary)' }}
        >
          Products
        </span>
        {' / '}
        <span>{product.title}</span>
      </div>

      {/* Product detail grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>
        {/* Product Image Section */}
        <div>
          <div 
            style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '1rem',
              overflow: 'hidden',
              backgroundImage: imageLoaded ? 'var(--gradient-secondary)' : 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: imageLoaded ? 'none' : 'shimmer 1.5s infinite',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '1rem',
              cursor: 'zoom-in'
            }}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={() => setImageHover(false)}
          >
            {/* Loading skeleton animation */}
            <style>
              {`
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
              `}
            </style>
            
            <img 
              src={product.image} 
              alt={product.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: imageLoaded ? 1 : 0,
                transition: 'all 0.5s ease',
                transform: imageHover ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            
            {/* Zoom icon overlay */}
            {imageLoaded && imageHover && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                pointerEvents: 'none'
              }}>
                <span>🔍</span>
                <span>Hover to zoom</span>
              </div>
            )}
          </div>
          
          {/* Category badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'var(--gradient-accent)',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: 'white'
          }}>
            {product.category}
          </div>
        </div>

        {/* Product Info Section */}
        <div>
          {/* Product title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {product.title}
          </h1>

          {/* Price */}
          <div style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '700',
            color: 'var(--accent)',
            marginBottom: '1.5rem'
          }}>
            {formatCurrency(product.price)}
          </div>

          {/* Stock status */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            padding: '0.75rem',
            background: product.inStock ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            borderRadius: '0.5rem',
            border: `2px solid ${product.inStock ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: product.inStock ? '#10b981' : '#ef4444'
            }} />
            <span style={{
              fontWeight: '600',
              color: product.inStock ? '#10b981' : '#ef4444'
            }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Description */}
          <div style={{
            marginBottom: '2rem',
            lineHeight: '1.8',
            color: 'var(--text-secondary)'
          }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: '0.75rem',
              color: 'var(--text-primary)'
            }}>
              Product Description
            </h3>
            <p>{product.description}</p>
          </div>

          {/* Quantity selector and Add to Cart */}
          {product.inStock && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              {/* Quantity controls */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.5rem 1rem',
                background: 'var(--gradient-secondary)',
                borderRadius: '2rem',
                boxShadow: 'var(--shadow-md)'
              }}>
                <button
                  onClick={decrementQuantity}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  −
                </button>
                <span style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: 'none',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  +
                </button>
              </div>

              {/* Add to Cart button */}
              <Button 
                variant="primary" 
                onClick={handleAddToCart}
                style={{
                  padding: '0.75rem 2rem',
                  fontSize: '1rem'
                }}
              >
                {added ? '✓ Added to Cart!' : 'Add to Cart'}
              </Button>
            </div>
          )}

          {/* Out of stock message */}
          {!product.inStock && (
            <div style={{
              padding: '1rem',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '0.5rem',
              color: '#ef4444',
              fontWeight: '600',
              marginBottom: '2rem'
            }}>
              This product is currently out of stock.
            </div>
          )}

          {/* Additional features */}
          <div style={{
            padding: '1.5rem',
            background: 'var(--gradient-secondary)',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Features & Benefits
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span>Free shipping on orders over ₦50,000</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span>30-day money-back guarantee</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span>1-year manufacturer warranty</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>✓</span>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
