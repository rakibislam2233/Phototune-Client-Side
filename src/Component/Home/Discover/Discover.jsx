
import { Link } from "react-router-dom";
import usePhotography from "../../Hook/usePhotography";
import Container from "../../Shared/Container/Container";
import Lottie from "lottie-react";
import loader from "../../../assets/lottie/loading.json";
const Discover = () => {
  const [photography,,isLoading] = usePhotography()
  console.log(photography);
  console.log(isLoading);
  return (
    <div className="w-full py-10">
      <Container>
        <div className="w-full bg-[#1F1F1F] shadow-lg rounded-full flex justify-between items-center py-5 px-8 ">
          <h2 className="text-2xl font-semibold">Discover</h2>
        </div>
        {
      isLoading ? <div className="w-full h-screen flex justify-center items-center"><Lottie className="w-52" animationData={loader} loop={true} /></div>:<>  <div className="grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-5">
      {
        photography?.slice(0,6).map(photo=><>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
        <img
          className="w-full h-64 rounded-2xl"
          src={photo.image}
          alt=""
        />
        <div className="flex justify-between font-medium">
          <h2 className="text-xl font-semibold">
           {photo.photographyName}
          </h2>
          <h2 className="flex gap-2 items-center">${photo.price}</h2>
        </div>
        <div className="flex justify-between">
          <h2>
            Owner: <span className="font-semibold">{photo.authorName}</span>
          </h2>
          <h2 className="flex gap-2 items-center">{photo.availableStock} in stock</h2>
        </div>
        <Link to={`/singlePhotography/${photo._id}`}> <button className="w-full py-3 mt-5 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
          View Details
        </button></Link>
     
      </div>
        </>)
      }
    </div>
    <div className="flex justify-center pt-10">
    <Link to={'/photography'}>
    <button className="py-3 px-8 bg-teal-500  rounded-full hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-500 font-semibold">
          View All
        </button>
    </Link>
    </div></>}
      
      </Container>
    </div>
  );
};

export default Discover;
