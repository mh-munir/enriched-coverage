'use client'
import { Playfair_Display } from "next/font/google";
import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
  });


export default function Reviewslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="flex flex-col gap-5">
            <RiDoubleQuotesL size={60} className="text-blue-300"/>
            <h3 className={`text-3xl font-medium text-gray-600 ${playfair.className}`}>Very knowledgeable and friendly staff. Wouldn't recommend anyone else.</h3>
            <p className="text-lg text-gray-700">Couldn’t recommend these folks enough. Will recommend to everyone I know.</p>
            <h4 className="text-xl font-semibold text-gray-900">Aaron L.</h4>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
            <RiDoubleQuotesL size={60} className="text-blue-300"/>
            <h3 className={`text-3xl font-medium text-gray-600 ${playfair.className}`}>Very knowledgeable and friendly staff. Wouldn't recommend anyone else.</h3>
            <p className="text-lg text-gray-700">Couldn’t recommend these folks enough. Will recommend to everyone I know.</p>
            <h4 className="text-xl font-semibold text-gray-900">Aaron L.</h4>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
            <RiDoubleQuotesL size={60} className="text-blue-300"/>
            <h3 className={`text-3xl font-medium text-gray-600 ${playfair.className}`}>Very knowledgeable and friendly staff. Wouldn't recommend anyone else.</h3>
            <h4 className="text-xl font-semibold text-gray-900">Aaron L.</h4>
        </div>
      </div>
    </Slider>
  );
}