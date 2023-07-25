import { useContext, useEffect, useState} from "react";
import { UserContext } from "../../Provider/Authprovider";
import axios from "axios";

const useAdmin = () => {
    const {user} = useContext(UserContext);
    const [isAdmin,setAdmin] = useState('');
    const [isLoading2,setLoading] = useState(true);
    useEffect(()=>{
        axios.get(`http://localhost:5000/isAdmin/${user?.email}`)
        .then(res=>{
            setLoading(false)
            setAdmin(res.data.admin)

        })
    },[user])
    return [isAdmin,isLoading2]
};

export default useAdmin;