import React from "react";
import Logo from '../../Assets/logo.svg'
const Footer = () => {
  const socialLinks = [
    { id: "facebook", href: "#" },
    { id: "twitter", href: "#" },
    { id: "youtube", href: "#" },
    { id: "instagram", href: "#" },
    { id: "amazon", href: "#" },
  ];

  const menus = [
    {
      title: "Organic",
      links: [
        { text: "About us", href: "#" },
        { text: "Conditions", href: "#" },
        { text: "Our Journals", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Affiliate Programme", href: "#" },
        { text: "Ultras Press", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Offers", href: "#" },
        { text: "Discount Coupons", href: "#" },
        { text: "Stores", href: "#" },
        { text: "Track Order", href: "#" },
        { text: "Shop", href: "#" },
        { text: "Info", href: "#" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { text: "FAQ", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Returns & Refunds", href: "#" },
        { text: "Cookie Guidelines", href: "#" },
        { text: "Delivery Information", href: "#" },
      ],
    },
  ];

  return (
    <footer className="py-5">
      <div className="container-lg">
        <div className="row">
          
          
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <img src={Logo} width="240" height="70" alt="logo" />
              <div className="social-links mt-3">
                <ul className="d-flex list-unstyled gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="btn btn-outline-light">
                        <svg width="16" height="16">
                          <use xlinkHref={`#${link.id}`} />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Menus */}
          {menus.map((menu, index) => (
            <div className="col-md-2 col-sm-6" key={index}>
              <div className="footer-menu">
                <h5 className="widget-title">{menu.title}</h5>
                <ul className="menu-list list-unstyled">
                  {menu.links.map((link, linkIndex) => (
                    <li className="menu-item" key={linkIndex}>
                      <a href={link.href} className="nav-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Subscribe Section */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Subscribe Us</h5>
              <p>Subscribe to our newsletter to get updates about our grand offers.</p>
              <form className="d-flex mt-3 gap-0" action="index.html">
                <input
                  className="form-control rounded-start rounded-0 bg-light"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <button className="btn btn-dark rounded-end rounded-0" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
