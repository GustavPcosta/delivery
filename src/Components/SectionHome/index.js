import React from 'react';
import Banner from '../../Assets/banner-1.jpg';
import DeliveryIcon from '../Svg/Delivery';
import FreshIcon from '../Svg/Fresh';
import OrganicIcon from '../Svg/OrganicIcon';
import './index.css';

const OrganicSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5">
            <h2 className="display-1 ls-1">
              <span className="fw-bold text-primary">Organic</span> Foods at your{' '}
              <span className="fw-bold">Doorsteps</span>
            </h2>
            <p className="fs-4">Dignissim massa diam elementum.</p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Start Shopping
              </a>
              <a
                href="#"
                className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Join Now
              </a>
            </div>
            <div className="row my-5">
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-1 fw-bold lh-sm mb-0">14k+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">Product Varieties</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-1 fw-bold lh-sm mb-0">50k+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto">
                    <p className="fs-1 fw-bold lh-sm mb-0">10+</p>
                  </div>
                  <div className="col">
                    <p className="text-uppercase lh-sm mb-0">Store Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <div className={`card border-0 ${card.bgColor} rounded-0 p-4 text-light`}>
                <div className="row">
                  <div className="col-md-3 text-center">
                    {card.icon} 
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    bgColor: 'bg-primary',
    icon: <FreshIcon />, 
    title: 'Fresh from farm',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
  },
  {
    bgColor: 'bg-secondary',
    icon: <OrganicIcon />, 
    title: '100% Organic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
  },
  {
    bgColor: 'bg-danger',
    icon: <DeliveryIcon />, 
    title: 'Free delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
  },
];

export default OrganicSection;
