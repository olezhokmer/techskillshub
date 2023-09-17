import ProductsCarousel from './carousel';
import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/server';
const ProductsFeatured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const updateProducts = async () => {
      const products = await getProducts();

      setProducts(products);
    };

    updateProducts();
  }, []);

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