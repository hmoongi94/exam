import { addToggleClassOnClick } from "./addToggleClassOnClick.js";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {

    // 사이드바 메뉴 토글
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");

    addToggleClassOnClick(sidebartoggle, sidebarmenu, "close")

    })
  }

