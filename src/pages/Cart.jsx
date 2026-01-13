
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import formatCurrency from '../utils/formatCurrency';

export default function Cart(){
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const cartItemStyle = {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    background: '#fff',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: '1rem',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    flexShrink: 0,
  };

  const infoStyle = {
    flex: 1,
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const quantityBtnStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '0.25rem',
    border: '1px solid var(--border)',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const summaryStyle = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow)',
    position: 'sticky',
    top: '100px',
  };

  const emptyStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
  };

  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  };

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div style={emptyStyle}>
          <h1>Your Cart is Empty</h1>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Start adding some amazing products!</p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Your Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</h1>
      
      <style>{`
        @media (min-width: 768px) {
          .cart-layout {
            grid-template-columns: 2fr 1fr !important;
          }
        }
      `}</style>

      <div style={layoutStyle} className="cart-layout">
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={cartItemStyle}>
              <img src={item.image} alt={item.title} style={imageStyle} />
              <div style={infoStyle}>
                <h3 style={{margin: '0 0 0.5rem 0'}}>{item.title}</h3>
                <p style={{color: 'var(--brand)', fontWeight: '700', margin: '0 0 1rem 0'}}>
                  {formatCurrency(item.price)}
                </p>
                <div style={quantityControlStyle}>
                  <button 
                    style={quantityBtnStyle}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span style={{minWidth: '40px', textAlign: 'center', fontWeight: '600'}}>
                    {item.quantity}
                  </span>
                  <button 
                    style={quantityBtnStyle}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginLeft: '1rem',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      background: 'transparent',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <p style={{fontWeight: '700', fontSize: '1.1rem'}}>
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={summaryStyle}>
          <h2 style={{marginTop: 0}}>Order Summary</h2>
          <div style={{borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '1rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <span style={{color: 'var(--text-secondary)'}}>Subtotal</span>
              <span style={{fontWeight: '600'}}>{formatCurrency(getCartTotal())}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <span style={{color: 'var(--text-secondary)'}}>Shipping</span>
              <span style={{fontWeight: '600', color: 'var(--accent)'}}>FREE</span>
            </div>
            <div style={{borderTop: '2px solid var(--border)', paddingTop: '1rem', marginTop: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem'}}>
                <span style={{fontWeight: '700'}}>Total</span>
                <span style={{fontWeight: '700', color: 'var(--brand)'}}>{formatCurrency(getCartTotal())}</span>
              </div>
            </div>
          </div>
          <div style={{marginTop: '2rem'}}>
            <Link to="/checkout" style={{textDecoration: 'none'}}>
              <Button>Proceed to Checkout</Button>
            </Link>
            <button
              onClick={clearCart}
              style={{
                width: '100%',
                marginTop: '1rem',
                padding: '0.75rem',
                border: '1px solid var(--border)',
                background: '#fff',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: '600',
                color: 'var(--text-secondary)',
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
