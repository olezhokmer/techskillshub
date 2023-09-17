import { GetServerSideProps } from 'next'
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import { getProductById } from '../../utils/server'; 

// types
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = String(query.pid);
  const product = await getProductById(pid);

  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }: ProductPageType) => {
  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
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
