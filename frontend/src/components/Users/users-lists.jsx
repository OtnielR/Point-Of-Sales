import { useRef, useState, useEffect } from "react"
import { getUsers } from "../../api/users";
import UsersList from "./users-list";

export default function usersLists() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      console.log(data)
      setUsers(data);
    }

    fetchData();
  }, []);

  return (<>
    <div className="w-1/3 flex flex-col gap-4 px-8 py-8">
      <div>
        <p className="font-bold text-xl">Users List</p>
      </div>
      <div className="flex flex-col gap-8">
        {users.map(user => (
          <UsersList user={user} key={user.id} ></UsersList>
        ))}
      </div>
    </div >
  </>)

}
