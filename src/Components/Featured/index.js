import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import featuredImg1 from '../../Assets/category-thumb-2.jpg';
import featuredImg2 from '../../Assets/category-thumb-3.jpg';
import featuredImg3 from '../../Assets/category-thumb-4.jpg';
import featuredImg4 from '../../Assets/category-thumb-5.jpg';
import featuredImg5 from '../../Assets/category-thumb-6.jpg';
import featuredImg6 from '../../Assets/category-thumb-7.jpg';
import featuredImg7 from '../../Assets/category-thumb-8.jpg';
import CartIcon from '../Svg/CartIcon';
import HeartIcon from '../Svg/Heart';

const featuredProducts = [
  { id: 1, title: "Fresh Organic Fruits", image: featuredImg1, discountedPrice: 15.00, originalPrice: 18.00, discount: "15% OFF" },
  { id: 2, title: "Artisan Breads", image: featuredImg2, discountedPrice: 8.50, originalPrice: 10.00, discount: "15% OFF" },
  { id: 3, title: "Gourmet Coffee", image: featuredImg3, discountedPrice: 12.00, originalPrice: 14.00, discount: "10% OFF" },
  { id: 4, title: "Vegan Snacks", image: featuredImg4, discountedPrice: 5.00, originalPrice: 6.00, discount: "15% OFF" },
  { id: 5, title: "Exotic Spices", image: featuredImg5, discountedPrice: 10.00, originalPrice: 12.00, discount: "20% OFF" },
  { id: 6, title: "Fresh Meat Cuts", image: featuredImg6, discountedPrice: 20.00, originalPrice: 25.00, discount: "20% OFF" },
  { id: 7, title: "Handmade Chocolates", image: featuredImg7, discountedPrice: 15.00, originalPrice: 18.50, discount: "15% OFF" },
];

const ProductItem = ({ product }) => {
  return (
    <div className="product-item swiper-slide">
      <figure>
        <a href="product-detail.html" title={product.title}>
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
                 <CartIcon />
                </svg>{" "}
                Add to Cart
              </a>
            </div>
            <div className="col-2">
              <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                <svg width="18" height="18">
                  <HeartIcon />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  return (
    <section id="featured-section" className="products-carousel">
      <div className="container-lg overflow-hidden py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between my-4">
              <h2 className="section-title">Featured Products</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev featured-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next featured-carousel-next btn btn-yellow">❯</button>
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
                nextEl: '.featured-carousel-next',
                prevEl: '.featured-carousel-prev',
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
              {featuredProducts.map((product) => (
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

export default FeaturedSection;
