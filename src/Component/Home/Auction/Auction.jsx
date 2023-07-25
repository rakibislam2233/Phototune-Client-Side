import Container from "../../Shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SetctionTitle from "../../Shared/SetctionTitle/SetctionTitle";
import usePhotography from "../../Hook/usePhotography";
import { AiFillHeart } from "react-icons/ai";
const Auction = () => {
  const [photography] = usePhotography()
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
            {
              photography?.slice(5,10).map(photo=><>     <SwiperSlide>
                <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                  <img
                    className="w-full h-64 rounded-2xl"
                    src={photo.image}
                    alt=""
                  />
                  <h3 className="text-3xl font-semibold">
                  {photo.photographyName}
                  </h3>
                  <div className="flex justify-between font-medium">
                    <h2>Price:${photo.price}</h2>
                    <h2 className="flex gap-2 items-center">
                      <AiFillHeart className="cursor-pointer text-rose-700"></AiFillHeart> 50
                    </h2>
                  </div>
                  <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 hover:bg-white rounded-full  hover:text-black transition-all duration-500 font-semibold">
                    View Details
                  </button>
                </div>
              </SwiperSlide></>)
            }
            
            {/* <SwiperSlide>
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
                  View Details
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
                  View Details
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
                  View Details
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
                  View Details
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
                  View Details
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
                  View Details
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
                  View Details
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
                  View Details
                </button>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Auction;

/**








//rahi vai photo
https://i.postimg.cc/MTTZrXD1/banner1.jpg



https://i.postimg.cc/RZLnk6cY/banner3.jpg


*/
