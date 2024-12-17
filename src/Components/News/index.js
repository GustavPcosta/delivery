import React, { useState } from 'react';
import News from '../../Assets/banner-newsletter.jpg'
const NewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <section>
      <div className="container-lg">
        <div
          className="bg-secondary text-light py-5 my-5"
          style={{
            background: `url(${News})  no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 p-3">
                <div className="section-header">
                  <h2 className="section-title display-5 text-light">
                    Get 25% Discount on your first purchase
                  </h2>
                </div>
                <p>Just Sign Up & Register it now to become a member.</p>
              </div>
              <div className="col-md-5 p-3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label d-none">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-md rounded-0"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label d-none">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-md rounded-0"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-dark btn-md rounded-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
