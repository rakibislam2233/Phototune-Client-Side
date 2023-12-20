import axios from "axios";
import { useEffect, useState } from "react";
const useGetUser = () => {
    const [users, setUsers] = useState([]);
  const [isLoading,setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://phototuneserverside-production.up.railway.app/users`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false)
      })

  }, []);
    return [users,isLoading]
};

export default useGetUser;