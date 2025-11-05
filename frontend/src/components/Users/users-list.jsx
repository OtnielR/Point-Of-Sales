export default function UsersList({ user }) {
  return (<>
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:bg-gray-100 transition shadow-sm cursor-pointer">
      <div className="flex flex-col">
        <p className="font-semibold text-gray-900">{user.username}</p>
        <p className="text-sm text-gray-600">{user.role}</p>
      </div>
    </div>
  </>)
}
