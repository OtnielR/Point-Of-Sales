import { useRef, useState, useEffect } from "react";
import { postUsers } from "../../api/users";

export default function UsersForm() {
  const userNameRef = useRef();
  const userRoleRef = useRef();
  const userPasswordRef = useRef();

  const handleSubmit = async (e) => {

    const username = userNameRef.current.value
    const role = userRoleRef.current.value
    const password = userPasswordRef.current.value

    postUsers(username, role, password)
  };

  return (
    <div className=" w-2/3 flex flex-col flex-1 justify-center items-center gap-4 py-10">
      <div className="w-2/3 bg-white py-4 px-10 shadow-md rounded-lg">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Add Users</h2>
          <div>
            <p>Username:</p>
            <input
              ref={userNameRef}
              type="text"
              className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <p>Role:</p>
            <select
              ref={userRoleRef}
              className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="Kasir">Kasir</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <p>Password :</p>
            <input
              ref={userPasswordRef}
              type="password"
              className="border rounded px-2 py-1 w-full  focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
