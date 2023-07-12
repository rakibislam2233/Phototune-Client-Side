import { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  return (
    <div className="w-full h-full p-8">
      <h2 className="text-2xl font-semibold text-center">Manage User</h2>
      <div className="overflow-x-auto py-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[16px] text-black">
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map(user=><><tr>
                    <td>
                        <img className="w-16 h-16 rounded-full" src={user.imageUrl} alt="" />
                    </td>
                    <td>
                     <h1 className="font-semibold text-[16px]">{user.name}</h1>
                    </td>
                    <td><h1 className="font-semibold text-[16px]">{user.email}</h1></td>
                    <td><h1 className="font-semibold text-[16px]">Users</h1></td>
                    <th>
                      <button className="p-3 bg-rose-500 rounded"><BsTrash3 className="w-6 h-6 text-white"></BsTrash3></button>
                    </th>
                  </tr></>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
