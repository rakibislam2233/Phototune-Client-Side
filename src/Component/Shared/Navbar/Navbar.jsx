import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useContext, useState } from "react";
import { UserContext } from "../../../Provider/Authprovider";
import { BsBoxArrowInRight } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(UserContext);
  return (
    <nav className="w-full fixed h-24 z-50 bg-[#1B1B1B]  shadow-lg text-white">
      <Container>
        <div className="w-full h-24 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-teal-500">Phototune</h3>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5 font-semibold">
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Home</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Auction</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Photography</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Author</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Blogs</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {user ? (
              <>
                <div
                  onClick={() => setOpen(!open)}
                  className="relative flex justify-center items-center w-14 h-14 bg-slate-50 rounded-full"
                >
                  <img
                    className="w-full  h-full rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                {open && (
                  <div className="absolute  top-24  right-5 rounded-t-md rounded-b-2xl  py-5  px-2 w-52 h-64 bg-[#1B1B1B] shadow-lg space-y-3">
                    <div className=" text-center space-y-3 ">
                      <img
                        src={user.photoURL}
                        className="w-16 h-16  rounded-full mx-auto"
                        alt=""
                      />
                      <h2 className="py-2">{user.displayName}</h2>
                      <Link to="dashboard">
                        <button className="py-2 px-5 bg-teal-500 rounded-full">
                          View Profile
                        </button>
                      </Link>
                    </div>
                    <hr />
                    <button
                      onClick={() => [logOut(), setOpen(false)]}
                      className="hover:bg-gray-900 w-full py-2 px-5 rounded-xl transition-all duration-500 flex  items-center gap-2"
                    >
                      <BsBoxArrowInRight></BsBoxArrowInRight> Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <button className="py-2 px-8 border border-teal-500 rounded-full font-semibold">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
