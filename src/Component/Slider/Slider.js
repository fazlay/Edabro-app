import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";


import { Swiper, SwiperSlide } from "swiper/react";
// ------------------------------
import SwiperCore, {

    Pagination,Navigation
  } from 'swiper';
import SingleCard from "../ProductContainer/SingleCard";
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);

// -------------------------------



export default ({products}) => {
    console.log(products);
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={300}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={false}
      navigation={true}
      className="mySwiper"
    >

         {/* {products.map((product) => (
              <SingleCard key={product.time} product={product}></SingleCard>
            ))} */}
         {products &&  products.map((product) => (
                <SwiperSlide><SingleCard product={product}></SingleCard></SwiperSlide>
            //   <SingleCard key={product.time} product={product}></SingleCard>
            ))}
   
    
     
    </Swiper>
  );
};
