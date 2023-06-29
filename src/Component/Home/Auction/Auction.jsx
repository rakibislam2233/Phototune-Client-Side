import Container from "../../Shared/Container/Container";
import { BsHeart } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SetctionTitle from "../../Shared/SetctionTitle/SetctionTitle";
const Auction = () => {
  return (
    <div className="w-full py-10">
      <Container>
       <SetctionTitle name={"Live Auction"}></SetctionTitle>
        <div className="pt-10">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // When window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">
                  Duck Natural Photography
                </h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Auction;

/**https://i.postimg.cc/MTTZrXD1/banner1.jpg
https://i.postimg.cc/x12zpybH/banner2.jpg
https://i.postimg.cc/RZLnk6cY/banner3.jpg
https://i.postimg.cc/NMzGhYJS/banner4.jpg
https://i.postimg.cc/mk1LBqKD/banner5.jpg
https://i.postimg.cc/14x9tBZK/banner6.jpg
https://i.postimg.cc/7P505LkC/banner7.jpg
https://i.postimg.cc/Pf0ZYkXS/banner8.jpg
https://i.postimg.cc/zf0jCPv0/rahi.jpg
https://i.postimg.cc/3wrDY81x/rahi2.jpg
https://i.postimg.cc/bv6Sv7VH/rahi3.jpg
https://i.postimg.cc/QtH9KfRL/rahi4.jpg
https://i.postimg.cc/JnvyNbLs/rahi5.jpg 
https://i.postimg.cc/fknjzGqT/emran.jpg
https://i.postimg.cc/JnF5gDbX/emran1.jpg
https://i.postimg.cc/D0bPKvgM/emran5.jpg
https://i.postimg.cc/05LLKrLr/emran6.jpg */
