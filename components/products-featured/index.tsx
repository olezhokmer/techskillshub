import ProductsCarousel from './carousel';
import useSwr from 'swr';
import products from 'utils/data/products';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={products} />
      </div>
    </section>
  )
};

export default ProductsFeatured