export default function Sidebar() {
  const mainNav = [{ icon_url: "home-icon.svg", link: "/", }, { icon_url: "cart-icon.svg", link: '/', },];

  return (<>
    <div id="sidebar" className="w-1/12 h-screen px-6 py-6">
      <div className="w-full h-full bg-white rounded-4xl px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-6">
          {mainNav.map(nav => {
            return <div className="w-full" key={nav.icon_url}>
              <img src={nav.icon_url} alt="" />
            </div>
          })}
        </div>

      </div>
    </div>
  </>)
}
