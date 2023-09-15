import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Unleash your potential, exclusive IT courses await</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero2.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Cutting-edge IT Courses</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <div className="data-item__content">
                <h4>Free Enrollment</h4>
                <p>On courses over $199</p>
              </div>
            </li>
            
            <li>
              <div className="data-item__content">
                <h4>Trusted by 99% Learners</h4>
                <p>See what our students have to say</p>
              </div>
            </li>
            
            <li>
              <div className="data-item__content">
                <h4>Quality Assured</h4>
                <p>Enjoy a 30-day guarantee on all our courses.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro