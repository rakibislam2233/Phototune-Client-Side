import axios from "axios";
import { useQuery } from "react-query";
const usePhotography = () => {
    // const [photography,setPhotography] = useState([])
    const {data: photography, isLoading,refetch} = useQuery({
      queryKey: ['photography'],
      queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/getAllPhotography`);
         
          return res.data;
      }
  })
    return [photography,refetch,isLoading]
};

export default usePhotography;