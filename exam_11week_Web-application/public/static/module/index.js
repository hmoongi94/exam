import { openToggle } from "./opentoggle";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");

    const menuopen = function(){
      sidebarmenu.classList.toggle('open')
    }
    
    openToggle(sidebartoggle, menuopen)

    })
  }

