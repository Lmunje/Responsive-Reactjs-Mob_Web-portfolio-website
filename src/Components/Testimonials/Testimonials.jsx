import React from 'react'
import'./Testimonials.css'
import {Swiper, SwiperSlide} from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import ReactPaginate from 'react-paginate';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


const Testimonials = () => {
    const clients = [
        {
        img: profilePic1,
        review:
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
        img: profilePic2,
        review:
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
        img: profilePic3,
        review:
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    {
        img: profilePic4,
        review:
             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    },
    ]


  return (
    <div  className="t-wrapper" id="Testimonials">
        <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span> from me...</span>

{/* blur part of testimonial section */}
 <div className="blur t-blur1" style={{background:"#ABF1FF94"}}></div>

{/* blur part of testimonial section */}
<div className="blur t-blur2" style={{background:"var(--purple)"}}></div>

        </div>
        {/* slider */}
        <Swiper
         modules={[ReactPaginate]}
        // modules={[Pagination]}
        slidesPerView={4}
        Reactpaginate={{clickable: true}}
        // pagination={{clickable: true}}

        >
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="Testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        )
    })}

        </Swiper>
    </div>
  )
}

export default Testimonials
