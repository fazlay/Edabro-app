import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
// ------------------------------
import SwiperCore, { Pagination, Navigation } from "swiper";
import SingleCard from "../ProductContainer/SingleCard";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// -------------------------------

export default ({ products, data }) => {
  // console.log(products);

  const showProduct = products.filter((product) => product.brand_name === data);
  console.log(showProduct);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={210}
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
      {showProduct &&
        showProduct.map((product) => (
          <SwiperSlide key={Math.random()}>
            <SingleCard product={product}></SingleCard>
          </SwiperSlide>
          //   <SingleCard key={product.time} product={product}></SingleCard>
        ))}
    </Swiper>
  );
};
