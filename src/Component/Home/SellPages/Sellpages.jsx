import Container from "../../Shared/Container/Container";

const Sellpages = () => {
  return (
    <div className="w-full py-10">
      <Container>
        {/* html
Copy code
<div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"> */}
        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 px-10 py-16 rounded-2xl ">
         <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
         <div className="space-y-4">
         <h2 className="text-4xl font-semibold">
            Create, Sell & Collect <br />
          </h2>
          <h2 className="text-4xl font-semibold"> NFTs at Phototune</h2>
          <h4 className="text-xl">
            Aliquam viverra enim commodo sed consequat tempor sit nisl cursus
            lectus.
          </h4>
          <div className="md:flex gap-2 space-y-3 md:space-y-0">
            <button className="py-3 px-8 border  rounded-full hover:bg-teal-500 transition-all duration-500 font-semibold hover:border-teal-500">Create Item</button>
            <button className="py-3 px-8 border  rounded-full hover:bg-teal-500 transition-all duration-500 font-semibold hover:border-teal-500">Discover More</button>
          </div>
         </div>
         <div>
            <img src="https://i.postimg.cc/DzxmVFkR/cta-img-1.png" alt="" />
         </div>
         </div>
        </div>
      </Container>
    </div>
  );
};

export default Sellpages;
