import { useContext } from "react";
import { UserContext } from "../../../../Provider/Authprovider";

const UserHome = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <h3 className="text-4xl font-semibold bg-gradient-to-r from-pink-600  to-white text-transparent bg-clip-text text-center">Welcome to {user?.displayName} </h3>
        </div>
    );
};

export default UserHome;