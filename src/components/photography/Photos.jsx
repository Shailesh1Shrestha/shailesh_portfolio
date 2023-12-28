import { Swiper, SwiperSlide } from 'swiper/react';
import photo4 from "../../assets/photo4.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo6 from "../../assets/photo6.jpg"
import photo2 from "../../assets/photo2.jpg"
import photo3 from "../../assets/photo3.jpg"
import photo7 from "../../assets/photo7.jpg"


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const reviews = [
    {id: 1, image:{photo4}},
    {id: 2, image: {photo5}},
    {id: 3, image: {photo6}},
    {id: 4, image: {photo2}},
    {id: 5, image: {photo3}},
    {id: 6, image:{photo7}}
]

function Photos() {
  return (
    
    <Swiper
      slidesPerView={3}
      spaceBetween={10}

      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}

      breakpoints={{
        640: {
            slidesPreView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPreView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPreView: 3, 
            spaceBetween: 50,
        },
      }}
   
           className="mySwiper"
    >
      {
        reviews.map(review => 
          <SwiperSlide key={review.id} >
            <div className="flex items-center gap-4">
            <img src={review.image} alt="img" className=" w-100 h-70 " />
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>

  )
}

export default Photos;
