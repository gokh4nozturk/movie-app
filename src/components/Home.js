import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Films from "./Films";

function Home() {
  return (
    <main className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="view">
        <div className="home-films">
          <Films />
        </div>
        <div className="sidebar-right">
          <SidebarRight />
        </div>
      </div>
    </main>
  );
}
export default Home;
