import { Link } from "react-router-dom";

export default function Sidebar() {
  const mainNav = [
    { icon_url: "/home.png", link: "/" },
    { icon_url: "/package.png", link: "/products" },
    { icon_url: "/categories.png", link: "/categories" },
    { icon_url: "/user.png", link: "/users" },
    { icon_url: "/bar-chart.png", link: "/sales" },
  ];
  return (
    <>
      <div id="sidebar" className="w-28 h-screen px-6 py-6">
        <div className="w-full h-full bg-white rounded-lg px-4 py-6">
          <div className="h-full flex flex-col justify-between items-between gap-6 ">
            <div className="w-full flex items-center justify-center">
              <Link to="/" className="w-full">
                <img
                  src="/DGF MARKET.png"
                  className="w-92 object-cover"
                  alt=""
                />
              </Link>
            </div>
            <div className="h-1/2 flex flex-col gap-8 justify-center items-center">
              {mainNav.map((nav) => {
                return (
                  <Link to={nav.link} className="w-full" key={nav.icon_url}>
                    <img src={nav.icon_url} alt="" />
                  </Link>
                );
              })}
            </div>
            <div className="w-8">
              <Link to="/" className="w-full">
                <img
                  src="/logout.png"
                  className="w-92 object-cover"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
