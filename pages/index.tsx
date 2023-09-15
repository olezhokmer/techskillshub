import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/fresh.jpeg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Fresh Courses Await You!</h3>
              <a href="#" className="btn btn--rounded">Show New Courses</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/basic.jpeg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Basic courses</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/sale.jpeg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Sale this autumn</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage