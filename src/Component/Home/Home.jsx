import Auction from "./Auction/Auction";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import Collaborate from "./Collaborate/Collaborate";
import Discover from "./Discover/Discover";
import Sellpages from "./SellPages/Sellpages";
import TopBuyer from "./TopBuyer/TopBuyer";
import TopPhotographar from "./TopPhotographar/TopPhotographar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="p-5">
        <Auction></Auction>
        <TopPhotographar></TopPhotographar>
        <TopBuyer></TopBuyer>
        <Discover></Discover>
        <Sellpages></Sellpages>
        <Blogs></Blogs>
        <Collaborate></Collaborate>
      </div>
    </div>
  );
};

export default Home;
