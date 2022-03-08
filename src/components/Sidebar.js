import React from "react";
import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "../Icons";
import Playlists from "./Sidebar/Playlists";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar);
  return (
    <aside className="w-60 pt-6 flex-shrink-0 flex flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="logo" className="h-10" />
      </a>

      <Menu />

      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-ceneter group text-sm text-link font-semibold  hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 group-hover:bg-opacity-100 bg-white bg-opacity-60 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-ceneter group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 rounded-sm bg-gradient-to-br from-purple-700 to-blue-300 text-white opacity-70 group-hover:opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenlen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
}

export default Sidebar;
