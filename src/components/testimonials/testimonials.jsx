import React from 'react'
import './testimonials.css'
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {

  const data = [
    {
      avatar: AVRT1,
      name: 'Jose',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repudiandae perspiciatis asperiores vero exercitationem consequatur eaque dicta quo reiciendis nesciunt.'
    },
    {
      avatar: AVRT2,
      name: 'Joao',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repudiandae perspiciatis asperiores vero exercitationem consequatur eaque dicta quo reiciendis nesciunt.'
    },
    {
      avatar: AVRT3,
      name: 'Pedro',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repudiandae perspiciatis asperiores vero exercitationem consequatur eaque dicta quo reiciendis nesciunt.'
    },
    {
      avatar: AVRT4,
      name: 'Felipe',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repudiandae perspiciatis asperiores vero exercitationem consequatur eaque dicta quo reiciendis nesciunt.'
    }
  ]

  return (
    <section id='Testimonials'>
      <h5 data-aos="fade-right" data-aos-duration="1250">Review from clients</h5>
      <h2 data-aos="fade-left" data-aos-duration="1250">Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial'>
                < div className="client__avatar" >
                  <img src={avatar} alt='' />
                </ div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials

