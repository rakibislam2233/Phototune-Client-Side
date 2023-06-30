import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full py-20 px-5 md:px-0">
            <Container>
                <div className="md:flex justify-between gap-8 py-5 space-y-6 md:space-y-0">
                    <div  className="w-full space-y-3 md:w-[40%]">
                        <h1 className="text-3xl font-semibold">Phototune</h1>
                        <h3 className="tracking-wider">Why I say old chap that is sping lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant matie boy young.!!</h3>
                        <div className="flex gap-5">
                            <BsFacebook className="w-6 h-6"></BsFacebook>
                            <BsInstagram className="w-6 h-6"></BsInstagram>
                            <BsTwitter className="w-6 h-6"></BsTwitter>
                            <BsLinkedin className="w-6 h-6"></BsLinkedin>
                        </div>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                        <h2 className="text-2xl font-semibold">Usefull Links</h2>
                        <ul className=" flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>All NFTs</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>How It Works</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Create</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Explore</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Sign Up</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                    <h2 className="text-2xl font-semibold">Community</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Help Center</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Partners</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Suggestions</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Blog</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Newsletter</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[20%] space-y-3">
                    <h2 className="text-2xl font-semibold">Info</h2>
                        <ul className="flex flex-col gap-3">
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>FAQ</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Tracking</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Privacy Policy</Link></li>
                            <li className="hover:text-teal-500 transition-all duration-500"><Link>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;