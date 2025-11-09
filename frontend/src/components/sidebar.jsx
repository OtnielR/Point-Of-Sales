import { Link, useLocation } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate()

  const mainNav = [
    { icon_url: "/home.png", link: "/", label: "Home" },
    { icon_url: "/package.png", link: "/products", label: "Products" },
    { icon_url: "/categories.png", link: "/categories", label: "Categories" },
    { icon_url: "/user.png", link: "/users", label: "Users" },
    { icon_url: "/bar-chart.png", link: "/sales", label: "Sales" },
  ];

  const handleLogout = () => {
    logout()

    navigate("/login")
  }

  return (
    <div className="h-screen w-28 p-4">
      <div className="h-full w-full bg-white shadow-xl rounded-2xl flex flex-col justify-between items-center py-6 border border-gray-200">

        <div className="w-full flex justify-center mt-2">
          <Link to="/" className="w-16">
            <img
              src="/DGF MARKET.png"
              alt="DGF Market"
              className="w-full object-contain"
            />
          </Link>
        </div>


        <nav className="flex flex-col items-center gap-8">
          {mainNav.map((nav) => {
            const isActive = location.pathname === nav.link;
            return (
              <Link
                key={nav.link}
                to={nav.link}
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${isActive
                  ? "bg-purple-100 border-2 border-purple-500 shadow-md"
                  : "hover:bg-gray-100"
                  }`}
              >
                <img
                  src={nav.icon_url}
                  alt={nav.label}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            );
          })}
        </nav>


        <div className="mb-1">
          <button
            onClick={handleLogout}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-red-50 transition-all duration-200"
          >
            <img src="/logout.png" alt="Logout" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
