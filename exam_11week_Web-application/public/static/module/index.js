import { openToggle } from "./opentoggle";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");
    openToggle(sidebarmenu)

    function menuopen(){
      sidebarmenu.classList.toggle('open')
    }
    openToggle(sidebartoggle, menuopen)
    
    })
  }

