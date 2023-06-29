import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {


  return (
  <nav className="w-full fixed h-24 z-50 bg-[#1B1B1B]  shadow-lg text-white">
     <Container>
     <div className="w-full h-24 flex justify-between items-center">
      <div>
        <h3 className="text-2xl font-semibold text-teal-500">Phototune</h3>
      </div>
      <div>
        <ul className="flex gap-4 font-semibold">
            <li>
                <NavLink>Home</NavLink>
            </li>
            <li><NavLink>Auction</NavLink></li>
            <li><NavLink>Photography</NavLink></li>
            <li><NavLink>Author</NavLink></li>
            <li><NavLink>Blogs</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
        </ul>
      </div>
      <div>
        <button className="py-2 px-8 border border-teal-500 rounded-full font-semibold">Login</button>
      </div>
    </div>
   </Container>
  </nav>
  );
};

export default Navbar;
