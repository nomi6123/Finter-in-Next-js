"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    arrows: false, // 🔥 Removes the navigation arrows
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="overflow-hidden relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 mb-1 bg-gradient-to-r from-black via-fuchsia-800 to-gray-900">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide uppercase">
          Our Services
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          We offer a variety of professional welding services, ensuring top-notch quality, precision, and durability in every project we handle.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="w-full max-w-6xl">
        {[
          {
            title: "Home Welding",
            description:
              "Expert welding services for home repairs and custom projects with unmatched precision and durability.",
            image: "/s1.png",
          },
          {
            title: "Commercial Welding",
            description:
              "High-quality commercial welding services for strong and reliable industrial structures.",
            image: "/s2.png",
          },
          {
            title: "Automotive Welding",
            description:
              "Precision welding for vehicles, from frame repairs to custom modifications.",
            image: "/s3.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="p-6"
          >
            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500
                border border-gray-700 p-8 flex flex-col items-center text-center w-[95%] mx-auto hover:bg-white/20 hover:border-gray-600"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 mb-4 filter invert contrast-100"
              />
              <h2 className="text-white text-2xl font-bold mb-3">
                {service.title}
              </h2>
              <p className="text-gray-300 text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
