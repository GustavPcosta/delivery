import React from 'react';
import './styles.css'; // Certifique-se de incluir o CSS do Bootstrap ou o arquivo customizado.
import img from '../../Assets/banner-ad-2.jpg'
import img1 from '../../Assets/banner-ad-1.jpg'
import img2 from '../../Assets/banner-ad-3.jpg'

const BannerSection = () => {
  return (
    <section className="py-3 banner">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-blocks">

              {/* Banner 1 */}
              <div
                className="banner-ad d-flex align-items-center large bg-info block-1"
                style={{
                  background: `url(${img1}) no-repeat`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="banner-content p-5">
                  <div className="content-wrapper text-light">
                    <h3 className="banner-title text-light">Items on SALE</h3>
                    <p>Discounts up to 30%</p>
                    <a href="#" className="btn-link text-white">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner 2 */}
              <div
                className="banner-ad bg-success-subtle block-2"
                style={{
                  background: `url(${img}) no-repeat`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="banner-content align-items-center p-5">
                  <div className="content-wrapper text-light">
                    <h3 className="banner-title text-light">Combo offers</h3>
                    <p>Discounts up to 50%</p>
                    <a href="#" className="btn-link text-white">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Banner 3 */}
              <div
                className="banner-ad bg-danger block-3"
                style={{
                  background:`url(${img2}) no-repeat no-repeat`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="banner-content align-items-center p-5">
                  <div className="content-wrapper text-light">
                    <h3 className="banner-title text-light">Discount Coupons</h3>
                    <p>Discounts up to 40%</p>
                    <a href="#" className="btn-link text-white">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
