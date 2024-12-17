import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import imag1 from '../../Assets/category-thumb-1.jpg';
import imag2 from '../../Assets/category-thumb-2.jpg';
import imag3 from '../../Assets/category-thumb-3.jpg';
import imag4 from '../../Assets/category-thumb-4.jpg';
import imag5 from '../../Assets/category-thumb-5.jpg';
import imag6 from '../../Assets/category-thumb-6.jpg';
import imag7 from '../../Assets/category-thumb-7.jpg';
import imag8 from '../../Assets/category-thumb-8.jpg';
import CartIcon from '../Svg/CartIcon';
import HeartIcon from '../Svg/Heart';

const categoryData = [
  { imgSrc: imag1, title: 'Fruits & Veges' },
  { imgSrc: imag2, title: 'Breads & Sweets' },
  { imgSrc: imag3, title: 'Fruits & Veges' },
  { imgSrc: imag4, title: 'Beverages' },
  { imgSrc: imag5, title: 'Meat Products' },
  { imgSrc: imag6, title: 'Breads' },
  { imgSrc: imag7, title: 'Fruits & Veges' },
  { imgSrc: imag8, title: 'Breads & Sweets' },
  { imgSrc: imag7, title: 'Fruits & Veges' },
  { imgSrc: imag8, title: 'Beverages' },
  { imgSrc: imag1, title: 'Meat Products' },
  { imgSrc: imag1, title: 'Breads' },
];

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item swiper-slide">
      <figure className="text-center">
        <a href="category.html" title={category.title}>
          <img
            src={category.imgSrc}
            alt={category.title}
            className="rounded-circle category-image"
          />
        </a>
      </figure>
      <div className="d-flex flex-column text-center mt-3">
        <h3 className="fs-6 fw-normal">{category.title}</h3>
        <div className="button-area mt-2">
          <div className="row g-1">
            <div className="col-6">
              <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                <svg width="18" height="18">
                  <CartIcon />
                </svg>{' '}
                Add to Cart
              </a>
            </div>
            <div className="col-6">
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

const CategorySection = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button id="category-carousel-prev" className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button id="category-carousel-next" className="swiper-next category-carousel-next btn btn-yellow">❯</button>
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
                nextEl: '#category-carousel-next',
                prevEl: '#category-carousel-prev',
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
              {categoryData.map((category, index) => (
                <SwiperSlide key={index}>
                  <CategoryItem category={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
