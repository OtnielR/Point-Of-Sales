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
   <div className="w-full flex justify-center py-10 ">
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Create New User</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              ref={userNameRef}
              type="text"
              className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Role</label>
            <select
              ref={userRoleRef}
              className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              required
            >
              <option value="Kasir">Kasir</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              ref={userPasswordRef}
              type="password"
              className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition shadow-md hover:shadow-lg">
            Submit
          </button>
        </form>
      </div>
    </div>  );
}
