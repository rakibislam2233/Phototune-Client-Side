import Container from "../../Shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SetctionTitle from "../../Shared/SetctionTitle/SetctionTitle";
const TopBuyer = () => {
  return (
    <div className="w-full py-10">
      <Container>
       <SetctionTitle name={"Top Buyer"}></SetctionTitle>
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
              <div className="w-full h-full  bg-[#1F1F1F] rounded-2xl space-y-5 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-full h-44 rounded-xl mx-auto"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                 <img
                    className="absolute -bottom-14 left-28 w-32 h-32  mx-auto border-[6px] border-teal-500"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-14 p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Rejaul Hafiz Rahi
                      </h3>
                    </div>
                    <h2>12 Winning</h2>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>
                      <h2 className="font-normal">Property code</h2>
                      <span>£@4551</span>
                    </div>
                    <div>
                      <h2 className="font-normal">Bidding Price</h2>
                      <span>$15000</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="py-2 px-8 rounded-lg border-none bg-teal-500">
                    Follow
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] rounded-2xl space-y-5 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-full h-44 rounded-xl mx-auto"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                 <img
                    className="absolute -bottom-14 left-28 w-32 h-32  mx-auto border-[6px] border-teal-500"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-14 p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Rejaul Hafiz Rahi
                      </h3>
                    </div>
                    <h2>12 Winning</h2>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>
                      <h2 className="font-normal">Property code</h2>
                      <span>£@4551</span>
                    </div>
                    <div>
                      <h2 className="font-normal">Bidding Price</h2>
                      <span>$15000</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="py-2 px-8 rounded-lg border-none bg-teal-500">
                    Follow
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] rounded-2xl space-y-5 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-full h-44 rounded-xl mx-auto"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                 <img
                    className="absolute -bottom-14 left-28 w-32 h-32  mx-auto border-[6px] border-teal-500"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-14 p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Rejaul Hafiz Rahi
                      </h3>
                    </div>
                    <h2>12 Winning</h2>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>
                      <h2 className="font-normal">Property code</h2>
                      <span>£@4551</span>
                    </div>
                    <div>
                      <h2 className="font-normal">Bidding Price</h2>
                      <span>$15000</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="py-2 px-8 rounded-lg border-none bg-teal-500">
                    Follow
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] rounded-2xl space-y-5 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-full h-44 rounded-xl mx-auto"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                 <img
                    className="absolute -bottom-14 left-28 w-32 h-32  mx-auto border-[6px] border-teal-500"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-14 p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Rejaul Hafiz Rahi
                      </h3>
                    </div>
                    <h2>12 Winning</h2>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>
                      <h2 className="font-normal">Property code</h2>
                      <span>£@4551</span>
                    </div>
                    <div>
                      <h2 className="font-normal">Bidding Price</h2>
                      <span>$15000</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="py-2 px-8 rounded-lg border-none bg-teal-500">
                    Follow
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] rounded-2xl space-y-5 cursor-pointer">
                <div className="relative">
                  <img
                    className="w-full h-44 rounded-xl mx-auto"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                 <img
                    className="absolute -bottom-14 left-28 w-32 h-32  mx-auto border-[6px] border-teal-500"
                    src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                    alt=""
                  />
                </div>
                <div className="pt-14 p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Rejaul Hafiz Rahi
                      </h3>
                    </div>
                    <h2>12 Winning</h2>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>
                      <h2 className="font-normal">Property code</h2>
                      <span>£@4551</span>
                    </div>
                    <div>
                      <h2 className="font-normal">Bidding Price</h2>
                      <span>$15000</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="py-2 px-8 rounded-lg border-none bg-teal-500">
                    Follow
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TopBuyer;
