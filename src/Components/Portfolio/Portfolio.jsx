import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react";
import  introwf from "../../img/intro.png";
import  contactwf from "../../img/contact.png";
import  projectwf from "../../img/project.png";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {themeContext} from "../../Context";
import {useContext} from "react";



const Portfolio = () => {

  const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
<div className="portfolio" id="Portfolio">
    {/* heading */}
    <span style = {{color : darkMode? 'white' : '' }}>Recent Projects </span>
    <span>Portolio</span>
    
{/* slider */}
 <Swiper  
 spaceBetween={30}
 slidesPerView={3}
 grabCursor={true}
 className='portfolio-slider'
 >
   <SwiperSlide>
    <img src={introwf} alt="" />
   </SwiperSlide>

   <SwiperSlide>
    <img src={contactwf} alt="" />
   </SwiperSlide>

   <SwiperSlide>
    <img src={projectwf} alt="" />
   </SwiperSlide>


 </Swiper>

</div>
  )
}

export default Portfolio


