import React from "react";
import StarFullIcon from "../Svg/StarFull";
import HeartIcon from "../Svg/Heart";
import CartIcon from "../Svg/CartIcon";

import imag1 from '../../Assets/product-thumb-1.png';
import imag2 from '../../Assets/product-thumb-2.png';
import imag3 from '../../Assets/product-thumb-3.png';
import imag4 from '../../Assets/product-thumb-4.png';
import imag5 from '../../Assets/product-thumb-5.png';
import imag6 from '../../Assets/product-thumb-6.png';
import imag7 from '../../Assets/product-thumb-7.png';
import imag8 from '../../Assets/product-thumb-8.png';
import imag9 from '../../Assets/product-thumb-9.png';
import imag10 from '../../Assets/product-thumb-10.png';

const products = [
  {
    id: 1,
    title: "Whole Wheat Sandwich Bread",
    image: imag1,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 18.0,
    discount: "10% OFF",
  },
  {
    id: 2,
    title: "Whole Grain Oatmeal",
    image: imag2,
    rating: 4.5,
    reviews: 41,
    originalPrice: 54.0,
    discountedPrice: 50.0,
    discount: "10% OFF",
  },
  {
    id: 3,
    title: "Whole Wheat Pita Bread",
    image: imag3,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 50.0,
    discount: "10% OFF",



  },
  {
    id: 4,
    title: "Whole Grain Pasta",
    image: imag4,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 50.0,
    discount: "10% OFF",
  },
  {
    id: 5,
    title: "Whole Grain Pasta",
    image: imag5,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 50.0,
    discount: "10% OFF",
  },
  {
    id: 6,
    title: "Whole Grain Pasta",
    image: imag6,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 50.0,
    discount: "10% OFF",
  },
  {
    id: 10,
    title: "Greek Style Plain Yogurt",
    image: imag10,
    rating: 4.5,
    reviews: 222,
    originalPrice: 24.0,
    discountedPrice: 18.0,
    discount: "10% OFF",
  },
];

const ProductItem = ({ product }) => (
  <div className="col">
    <div className="product-item">
      <figure>
        <a href="index.html" title={product.title}>
          <img src={product.image} alt={product.title} className="tab-image" />
        </a>
      </figure>
      <div className="d-flex flex-column text-center">
        <h3 className="fs-6 fw-normal">{product.title}</h3>
        <div>
          <span className="rating">
            {[...Array(5)].map((_, index) => (
              <StarFullIcon
                key={index}
                width={18}
                height={18}
                className={
                  index < Math.floor(product.rating)
                    ? "text-warning"
                    : "text-body-tertiary"
                }
              />
            ))}
          </span>
          <span>({product.reviews})</span>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <del>${product.originalPrice.toFixed(2)}</del>
          <span className="text-dark fw-semibold">
            ${product.discountedPrice.toFixed(2)}
          </span>
          <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            {product.discount}
          </span>
        </div>
        <div className="button-area p-3 pt-0">
          <div className="row g-1 mt-2">
            <div className="col-3">
              <input
                type="number"
                name="quantity"
                className="form-control border-dark-subtle input-number quantity"
                defaultValue="1"
              />
            </div>
            <div className="col-7">
              <a
                href="#"
                className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"
              >
                <svg width="18" height="18">
                  <CartIcon />
                </svg>{" "}
                Add to Cart
              </a>
            </div>
            <div className="col-2">
              <a
                href="#"
                className="btn btn-outline-dark rounded-1 p-2 fs-6"
              >
                <HeartIcon width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, buttonLabel, onButtonClick }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="section-header d-flex flex-wrap justify-content-between my-4">
        <h2 className="section-title">{title}</h2>
        <div className="d-flex align-items-center">
          <button
            onClick={onButtonClick}
            className="btn btn-primary rounded-1"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProductGrid = () => {
  const handleViewAllClick = () => {
    console.log("View All clicked");
  };

  return (
    <div className="container">
      <SectionHeader
        title="Best Selling Products"
        buttonLabel="View All"
        onButtonClick={handleViewAllClick}
      />
      <div className="row">
        <div className="col-md-12">
          <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
