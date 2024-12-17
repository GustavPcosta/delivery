import React from 'react';
import img1 from '../../Assets/img-app-store.png'
import img2 from '../../Assets/img-google-play.png'
import img3 from  '../../Assets/banner-onlineapp.png'
const DownloadAppSection = () => {
  return (
    <section className="pb-4 my-4">
      <div className="container-lg">
        <div className="bg-warning pt-5 rounded-5">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <h2 className="mt-5">Download Organic App</h2>
                <p>Online Orders made easy, fast and reliable</p>
                <div className="d-flex gap-2 flex-wrap mb-5">
                  <a href="#" title="App store">
                    <img
                      src={img1}
                      alt="app-store"
                    />
                  </a>
                  <a href="#" title="Google Play">
                    <img
                      src={img2}
                      alt="google-play"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={img3}
                  alt="phone"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
