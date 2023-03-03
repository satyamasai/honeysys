import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";

let temp = [];
const Carousel = (props) => {
  //   console.log(props.data, "crdata");
  let data = props.data;

  temp = data.filter((el) => el.carousel == true);

//   console.log(temp, "temp");

//   console.log(temp);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    
    autoplaySpeed: 2000,

  };
  return (
    <Slider className="slider" {...settings}>
     { temp.map((el)=>(

           <div className="card">
           
           <img src={el.image_URL} alt="p_image"/>
           <p>Name : {el.name}</p>
           <p>Brand : {el.brand}</p>
           <p>Price : {el.price}</p>
          
           
           </div>

     ))}
      
    </Slider>
  );
};

export default Carousel;
