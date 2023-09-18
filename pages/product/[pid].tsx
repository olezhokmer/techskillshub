import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getProductById } from 'utils/server';
import { ProductType } from 'types';

const Product = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const { pid } = router.query;

    const fetchProduct = async () => {
      const product: ProductType = await getProductById(String(pid));

      // @ts-ignore:next-line
      setProduct(product);
      return;
    }
    
    fetchProduct();
  }, [router.query]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={(product as ProductType).images} />
            <Content product={product} />
          </div>

        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
