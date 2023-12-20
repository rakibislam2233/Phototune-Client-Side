import { Link } from "react-router-dom";
import useGetUser from "../Hook/useGetUser";
import Container from "../Shared/Container/Container";

const Author = () => {
  const [users] = useGetUser();
  const topAuthor = users.filter((user) => user.role === "host");

  return (
    <div className="pt-24 pb-36">
      <Container>
        <h2 className="text-3xl py-8 font-semibold text-center">All Author</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 lg:grid-cols-4 gap-5">
          {topAuthor?.map((photo, i) => (
            <Link key={i} to={`/authorDetails/${photo._id}`}>
              <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-52 rounded-2xl"
                  src={photo.imageUrl}
                  alt=""
                />
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h2 className="flex gap-2 items-center">{photo.email}</h2>
                <div className="flex justify-center">
                  <button className="btn btn-sm border-none bg-teal-500">
                    Follow
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Author;
