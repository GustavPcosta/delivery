import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'; 

import img1 from '../../Assets/product-thumb-20.png'
import img2 from '../../Assets/product-thumb-21.png'
import img3 from '../../Assets/product-thumb-22.png'
import img4 from '../../Assets/product-thumb-23.png'
import img5 from '../../Assets/product-thumb-24.png'
import img6 from '../../Assets/product-thumb-25.png'
import img7 from '../../Assets/product-thumb-26.png'
import CartIcon from '../Svg/CartIcon';
import HeartIcon from '../Svg/Heart';

const justArrivedProducts = [
  { id: 1, title: "Organic Carrots", image: img1, discountedPrice: 12.00, originalPrice: 15.00, discount: "15% OFF" },
  { id: 2, title: "Avocado Slices", image: img2, discountedPrice: 5.00, originalPrice: 6.50, discount: "10% OFF" },
  { id: 3, title: "Coconut Water", image: img3, discountedPrice: 3.50, originalPrice: 5.00, discount: "30% OFF" },
  { id: 4, title: "Gourmet Olives", image: img4, discountedPrice: 9.00, originalPrice: 12.00, discount: "20% OFF" },
  { id: 5, title: "Almond Butter", image: img5, discountedPrice: 8.00, originalPrice: 10.00, discount: "10% OFF" },
  { id: 6, title: "Granola Bars", image: img6, discountedPrice: 4.00, originalPrice: 5.50, discount: "25% OFF" },
  { id: 7, title: "Herbal Tea", image: img7, discountedPrice: 6.00, originalPrice: 8.00, discount: "15% OFF" },
  { id: 8, title: "Fresh Strawberries", image: img7, discountedPrice: 10.00, originalPrice: 12.50, discount: "20% OFF" }
];

const ProductItem = ({ product }) => {
  return (
    <div className="product-item swiper-slide">
      <figure>
        <a href="index.html" title={product.title}>
          <img src={product.image} alt={product.title} className="tab-image" />
        </a>
      </figure>
      <div className="d-flex flex-column text-center">
        <h3 className="fs-6 fw-normal">{product.title}</h3>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <del>${product.originalPrice.toFixed(2)}</del>
          <span className="text-dark fw-semibold">${product.discountedPrice.toFixed(2)}</span>
          <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            {product.discount}
          </span>
        </div>
        <div className="button-area p-3 pt-0">
          <div className="row g-1 mt-2">
            <div className="col-3">
              <input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue="1" />
            </div>
            <div className="col-7">
              <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                <svg width="18" height="18">
                 <CartIcon/>
                </svg>{" "}
                Add to Cart
              </a>
            </div>
            <div className="col-2">
              <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                <svg width="18" height="18">
                  <HeartIcon/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JustArrived = () => {
  return (
    <section id="just-arrived" className="products-carousel">
      <div className="container-lg overflow-hidden py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between my-4">
              <h2 className="section-title">Just Arrived</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev just-arrived-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next just-arrived-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              speed={500}
              navigation={{
                nextEl: '.just-arrived-carousel-next',
                prevEl: '.just-arrived-carousel-prev',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {justArrivedProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductItem product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustArrived;
