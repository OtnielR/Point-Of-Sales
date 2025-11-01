import Sidebar from "../components/sidebar"
import UsersForm from "../components/Users/users-form"
import UsersLists from "../components/Users/users-lists"

export default function Users() {
  return (<>
    <main className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <section className="flex flex-row w-11/12">
        <UsersForm></UsersForm>
        <UsersLists></UsersLists>
      </section>
    </main>
  </>)
}
