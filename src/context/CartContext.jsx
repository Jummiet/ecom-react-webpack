// Import necessary React hooks for context management, state, and side effects
import { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext to share cart state across components
const CartContext = createContext();

/**
 * Custom hook to access cart context
 * @returns {Object} Cart context value with all cart methods and state
 * @throws {Error} If used outside of CartProvider
 */
export function useCart() {
  const context = useContext(CartContext);
  // Ensure hook is used within CartProvider
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

/**
 * CartProvider component - Manages global shopping cart state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 */
export function CartProvider({ children }) {
  // Initialize cart state with data from localStorage (persists across sessions)
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initialization
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes (side effect)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Add a product to the cart or increment quantity if already exists
   * @param {Object} product - Product object to add
   */
  const addToCart = (product) => {
    setCartItems(prev => {
      // Check if product already exists in cart
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Increment quantity if product exists
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product with quantity of 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /**
   * Remove a product from the cart completely
   * @param {number} productId - ID of product to remove
   */
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  /**
   * Update the quantity of a specific product in cart
   * @param {number} productId - ID of product to update
   * @param {number} quantity - New quantity (removes if <= 0)
   */
  const updateQuantity = (productId, quantity) => {
    // Remove item if quantity is 0 or negative
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    // Update quantity for specified product
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear all items from the cart
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Calculate total price of all items in cart
   * @returns {number} Total cart value
   */
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /**
   * Calculate total number of items in cart
   * @returns {number} Total item count (sum of all quantities)
   */
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Provide cart state and methods to all child components
  return (
    <CartContext.Provider
      value={{
        cartItems,        // Current cart items array
        addToCart,        // Function to add items
        removeFromCart,   // Function to remove items
        updateQuantity,   // Function to update item quantities
        clearCart,        // Function to clear entire cart
        getCartTotal,     // Function to get total price
        getCartCount,     // Function to get total item count
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
