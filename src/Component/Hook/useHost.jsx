import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../../Provider/Authprovider";

const useHost = () => {
    const {user} = useContext(UserContext);
    const {data: isHost, isLoading: isHostLoading,refetch} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://phototune-server-side-l7ll.vercel.app/isHost/${user?.email}`);
            return res.data.host;
        }
    })
    return [isHost, isHostLoading,refetch]
};

export default useHost;