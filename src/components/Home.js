import React from "react";
import SidebarLeft from "./SidebarLeft";
import Films from "./Films";

function Home() {
  return (
    <main className="home-main">
      <div className="sidebar-left">
        <SidebarLeft />
      </div>
      <div className="view">
        <Films />
      </div>
    </main>
  );
}
export default Home;
