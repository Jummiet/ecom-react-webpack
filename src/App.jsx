
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Categories = lazy(() => import('./pages/Categories'));
const NewArrivals = lazy(() => import('./pages/NewArrivals'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <CartProvider>
      <div className="app"> 
        <Header />
        <main>
          <Suspense fallback={<p>Loading…</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
