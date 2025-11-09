import { useRef, useState, useEffect } from "react"
import { getUsers } from "../../api/users";
import UsersList from "./users-list";

export default function usersLists() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUsers(data);
    }

    fetchData();
  }, []);

  return (<>
    <div className="w-full min-h-screen flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Users List
        </h2>

        <div className="flex flex-col gap-4 max-h-[65vh] overflow-y-auto pr-2">
          {users.length > 0 ? (
            users.map((user) => (
              <UsersList user={user} key={user.id} />
            ))
          ) : (
            <p className="text-gray-500 text-center py-3">
              No users found
            </p>
          )}
        </div>

      </div>
    </div>
  </>)

}
