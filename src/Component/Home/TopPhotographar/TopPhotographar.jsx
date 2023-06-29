import Container from "../../Shared/Container/Container";
import { BsFillTrophyFill} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SetctionTitle from "../../Shared/SetctionTitle/SetctionTitle";
const TopPhotographar = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <SetctionTitle name={"Top Photographar"}></SetctionTitle>
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
              <div className="w-full h-full  bg-[#1F1F1F] py-8 px-5 rounded-2xl space-y-5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <button className="btn btn-sm bg-amber-500 text-xl text-white border-none">
                    <BsFillTrophyFill></BsFillTrophyFill>4
                  </button>
                  <h1 className="font-semibold">8.2M Followers</h1>
                </div>
                <hr />
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://i.postimg.cc/wxCQNMp2/Rahivai-Photo.jpg"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">Rejaul Hafiz Rahi</h3>
                    <span>Professional Photographer</span>
                  </div>
                  <button className="btn btn-sm border-none bg-teal-500">
                    Follow
                  </button>
                </div>
                <div className="flex justify-between font-medium">
                  <h2>29 June 2023</h2>
                  <h2>3 in Stock</h2>
                </div>
                <h2 className="text-2xl font-semibold">
                  Duck Natural Photography
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] py-8 px-5 rounded-2xl space-y-5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <button className="btn btn-sm bg-amber-500 text-xl text-white border-none">
                    <BsFillTrophyFill></BsFillTrophyFill>4
                  </button>
                  <h1 className="font-semibold">8.2M Followers</h1>
                </div>
                <hr />
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://i.postimg.cc/qq3cYV82/Emran-Vai-Phot.jpg"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">Emran Ali</h3>
                    <span>Natural Photographer</span>
                  </div>
                  <button className="btn btn-sm border-none bg-teal-500">
                    Follow
                  </button>
                </div>
                <div className="flex justify-between font-medium">
                  <h2>29 June 2023</h2>
                  <h2>6 in Stock</h2>
                </div>
                <h2 className="text-2xl font-semibold">
                  Duck Natural Photography
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] py-8 px-5 rounded-2xl space-y-5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <button className="btn btn-sm bg-amber-500 text-xl text-white border-none">
                    <BsFillTrophyFill></BsFillTrophyFill>4
                  </button>
                  <h1 className="font-semibold">8.2M Followers</h1>
                </div>
                <hr />
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://i.postimg.cc/qq3cYV82/Emran-Vai-Phot.jpg"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">Emran Ali</h3>
                    <span>Natural Photographer</span>
                  </div>
                  <button className="btn btn-sm border-none bg-teal-500">
                    Follow
                  </button>
                </div>
                <div className="flex justify-between font-medium">
                  <h2>29 June 2023</h2>
                  <h2>6 in Stock</h2>
                </div>
                <h2 className="text-2xl font-semibold">
                  Duck Natural Photography
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full  bg-[#1F1F1F] py-8 px-5 rounded-2xl space-y-5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <button className="btn btn-sm bg-amber-500 text-xl text-white border-none">
                    <BsFillTrophyFill></BsFillTrophyFill>4
                  </button>
                  <h1 className="font-semibold">8.2M Followers</h1>
                </div>
                <hr />
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://i.postimg.cc/qq3cYV82/Emran-Vai-Phot.jpg"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">Emran Ali</h3>
                    <span>Natural Photographer</span>
                  </div>
                  <button className="btn btn-sm border-none bg-teal-500">
                    Follow
                  </button>
                </div>
                <div className="flex justify-between font-medium">
                  <h2>29 June 2023</h2>
                  <h2>6 in Stock</h2>
                </div>
                <h2 className="text-2xl font-semibold">
                  Duck Natural Photography
                </h2>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/BvSgvz0G/EmadAli.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">Md Emad Ali</h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-2 px-8 bg-teal-500 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/02nkKtMC/344761107-1454848951952320-4221845962883871678-n.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">Md Rakib Islam</h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-2 px-8 bg-teal-500 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/d1Gvsncr/masudVai.jpg
                  "
                  alt=""
                />
                <h3 className="text-3xl font-semibold">Masud Rana</h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-2 px-8 bg-teal-500 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/BvL4y4hh/Nowsad.jpg"
                  alt=""
                />
                <h3 className="text-3xl font-semibold">Nowsad Islam</h3>
                <div className="flex justify-between font-medium">
                  <h2>Price:$50</h2>
                  <h2 className="flex gap-2 items-center">
                    <BsHeart className="cursor-pointer"></BsHeart> 50
                  </h2>
                </div>
                <button className="w-full py-2 px-8 bg-teal-500 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                  Buy Now
                </button>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TopPhotographar;
