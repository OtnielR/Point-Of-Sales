import { Link } from "react-router-dom";

export default function Sidebar() {
  const mainNav = [{ icon_url: "home-icon.svg", link: "/", }, { icon_url: "list-icon.svg", link: '/products' }, { icon_url: "category-icon.svg", link: '/categories', }, { icon_url: "user-icon.svg", link: "/users" },];

  return (<>
    <div id="sidebar" className="w-28 h-screen px-6 py-6">
      <div className="w-full h-full bg-white rounded-lg px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-6">
          {mainNav.map(nav => {
            return <Link to={nav.link} className="w-full" key={nav.icon_url}>
              <img src={nav.icon_url} alt="" />
            </Link>
          })}
        </div>

      </div>
    </div>
  </>)
}
