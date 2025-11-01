export default function UsersList({ user }) {
  return (<>
    <div className="flex flex-row justify-between">
      <div>
        <p className="font-bold">
          {user.username}
        </p>
        <p>
          {user.role}
        </p>
      </div>
    </div>
  </>)
}
