import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { useEffect, useState } from 'react';
import { getProducts } from 'utils/server';

const ProductsContent = () => {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    const updateProducts = async () => {
      const products = await getProducts();

      setProducts(products);
      setProductsLoaded(true);
    };

    updateProducts();
  }, []);
  return (
    <>
      {!productsLoaded && 
        <ProductsLoading />
      }

      {productsLoaded &&
        <section className="products-list">
          {products.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent