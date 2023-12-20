
import { BsTrash3 } from "react-icons/bs";
import Lottie from "lottie-react";
import loader from "../../../../assets/lottie/loading.json";
import useGetUser from "../../../../Component/Hook/useGetUser";
const ManageUser = () => {
  const  [users,isLoading] = useGetUser()
  console.log(users);
  return (
    <>
    {
     isLoading ? <div className="w-full h-screen flex justify-center"><Lottie className="w-52" animationData={loader} loop={true} /></div> : users.length ===0 ? <div className="w-full h-screen flex justify-center items-center text-white"><h2 className="font-semibold">No Data Available</h2></div>:<div className="w-full h-full p-8">
      <h2 className="text-2xl text-center">Manage User</h2>
      <div className="overflow-x-auto py-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
                users?.map(user=><><tr>
                    <td>
                        <img className="w-10 md:w-16 h-10 md:h-16 rounded-full" src={user.imageUrl} alt="" />
                    </td>
                    <td>
                     <h1 className="text-[16px]">{user.name}</h1>
                    </td>
                    <td><h1 className="text-[16px]">{user.email}</h1></td>
                    <td><button className="btn btn-sm bg-rose-500">{user.role?user.role:"User"}</button></td>
                    <th>
                      <button className="p-3 bg-rose-500 rounded"><BsTrash3 className="w-6 h-6 text-white"></BsTrash3></button>
                    </th>
                  </tr></>)
            }
          </tbody>
        </table>
      </div>
    </div>
    }
    </>
    
  );
};

export default ManageUser;
