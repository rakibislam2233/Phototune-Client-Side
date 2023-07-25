import Container from "../../Shared/Container/Container";
import { BsFillTrophyFill} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import SetctionTitle from "../../Shared/SetctionTitle/SetctionTitle";
import useGetUser from "../../Hook/useGetUser";
import { Link } from "react-router-dom";
const TopPhotographar = () => {
  const [users] = useGetUser();
  const topAuthor =  users.filter(user=>user.role==="host")
  return (
    <>
    { <div className="w-full py-10">
      <Container>
        <SetctionTitle name={"Top Author"}></SetctionTitle>
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
              topAuthor?.slice(0,8).map(author=><>
              <SwiperSlide>
              <Link to={`/authorDetails/${author._id}`}>
              <div className="w-full h-full  bg-[#1F1F1F] py-10 px-5 rounded-2xl space-y-5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <button className="btn btn-sm bg-amber-500 text-xl text-white border-none">
                    <BsFillTrophyFill></BsFillTrophyFill>4
                  </button>
                  <h1 className="font-semibold">8.2M Followers</h1>
                </div>
                <hr />
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={author.imageUrl}
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{author.name}</h3>
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
              </div>
              </Link>
            </SwiperSlide></>)
            }
            
          </Swiper>
        </div>
      </Container>
    </div>
    }
    </>
   
  );
};

export default TopPhotographar;
