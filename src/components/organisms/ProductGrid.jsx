
import ProductCard from '../molecules/ProductCard';

export default function ProductGrid({items=[]}){
  return (
    <section className="grid" aria-label="Product grid">
      {items.map(p => <ProductCard key={p.id} product={p} />)}
    </section>
  );
}
