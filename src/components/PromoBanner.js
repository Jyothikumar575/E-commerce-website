import React from 'react';
import Slider from 'react-slick';
import './PromoBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromoBanner = () => {
  const banners = [
  {
    id: 1,
    img: '/assets/adds/Fashion banner.png',
    alt: 'Fashion Add',
  },
  {
    id: 2,
    img: 'assets/adds/mattress banner.png',
    alt: 'Mattress Add',
  },
  {
    id: 3,
    img: 'assets/adds/sofa banner.png',
    alt: 'Sofa Add',
  },
  {
    id: 4,
    img: 'assets/adds/electronics banner.png',
    alt: 'Electronics Add',
  },
];


  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="promo-banner">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img src={banner.img} alt={banner.alt} className="banner-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromoBanner;
