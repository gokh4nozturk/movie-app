import React from "react";
import SidebarLeft from "./SidebarLeft";
import Films from "./Films";
import Navigation from "./Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <main className="home-main">
        <div className="sidebar-left">
          <SidebarLeft />
        </div>
        <div className="view">
          <Films />
        </div>
      </main>
    </>
  );
}
export default Home;
