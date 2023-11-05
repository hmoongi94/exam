// import { openToggle } from "./opentoggle";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {

    // 사이드바 메뉴 토글
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");

    sidebartoggle.addEventListener("click",function(){
      sidebarmenu.classList.toggle('close')
    })

    })
  }

