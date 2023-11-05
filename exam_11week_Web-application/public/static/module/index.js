// import { openToggle } from "./opentoggle";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");

    sidebartoggle.addEventListener("click",function(){
      sidebarmenu.classList.toggle('open')
    })

    })
  }

