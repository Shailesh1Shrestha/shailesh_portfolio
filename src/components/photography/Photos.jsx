import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const reviews = [
    {id: 1, image: "src/assets/photo4.jpg"},
    {id: 2, image: "src/assets/photo5.jpg"},
    {id: 3, image: "src/assets/photo6.jpg"},
    {id: 4, image: "src/assets/photo1.jpg"},
    {id: 5, image: "src/assets/photo2.jpg"},
    {id: 6, image: "src/assets/photo3.jpg"},
    {id: 7, image: "src/assets/photo7.jpg"},
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
