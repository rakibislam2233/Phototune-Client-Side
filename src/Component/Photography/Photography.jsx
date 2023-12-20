import { useEffect, useState } from "react";
import usePhotography from "../Hook/usePhotography";
import Container from "../Shared/Container/Container";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Photography = () => {
  const [photography, ,] = usePhotography();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(photography?.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = photography?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full py-28">
      <Container>
        <h2 className="text-3xl pt-5 font-semibold text-center">
          All Photography
        </h2>
        <div className="flex justify-end items-center  gap-5">
          <button
            className="w-10 h-10 rounded-full bg-teal-500 flex justify-center items-center"
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </button>
          <button
            className="w-10 h-10 rounded-full bg-teal-500 flex justify-center items-center"
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 lg:grid-cols-3 gap-5">
          {slicedData?.map((photo, i) => (
            <div
              key={i}
              className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer"
            >
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
                  Owner:{" "}
                  <span className="font-semibold">{photo.authorName}</span>
                </h2>
                <h2 className="flex gap-2 items-center">
                  {photo.availableStock} in stock
                </h2>
              </div>
              <Link to={`/singlePhotography/${photo._id}`}>
                <button className="w-full py-3 mt-5 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Photography;
