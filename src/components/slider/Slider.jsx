'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { clientsLogo } from "@/demodata/DemoData";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows : false,
      };
    return (
        <div className="slider-container">
        <Slider {...settings}>
            {clientsLogo.map((logo, index)=>{
                return (
                    <div className="w-28">
                        <Image className="w-28 h-auto" src={logo.logo}/>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }