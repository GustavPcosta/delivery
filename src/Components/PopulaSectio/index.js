import React from 'react';
import PackageIcon from '../Svg/PackageIcon';
import SecureIcon from '../Svg/SecureIcon';
import QualityIcon from '../Svg/QualityIcon';
import SavingsIcon from '../Svg/SaveIcon';
import OffersIcon from '../Svg/Offers';

const FeaturesSection = () => {
  const features = [
    {
      id: 'package',
      title: 'Free delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      icon: <PackageIcon />
     
    },
    {
      id: 'secure',
      title: '100% secure payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      icon: <SecureIcon />
    
      
    },
    {
      id: 'quality',
      title: 'Quality guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      icon: <QualityIcon />
    
    },
    {
      id: 'savings',
      title: 'Guaranteed savings',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      icon: <SavingsIcon />
    },
    {
      id: 'offers',
      title: 'Daily offers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      icon: <OffersIcon/>
    },
  ];

  return (
    <section className="py-5">
      <div className="container-lg">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
          {features.map((feature, index) => (
            <div className="col" key={index}>
              <div className="card mb-3 border border-dark-subtle p-3">
                <div className="text-dark mb-3">
                  
                    {feature.icon}
                  
                </div>
                <div className="card-body p-0">
                  <h5>{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
