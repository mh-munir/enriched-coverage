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
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows : false,
      };
    return (
        <div className="slider-container">
        <Slider {...settings}>
            {clientsLogo.map((Clientlogo, index)=>{
                return (
                    <div key={index}>
                        <Image className="w-auto h-[40px]" src={Clientlogo.logo} alt={Clientlogo.alt}/>
                    </div>
                )
            })}
        </Slider>
      </div>
    );
  }