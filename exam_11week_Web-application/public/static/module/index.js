import { openToggle } from "./opentoggle";




export const load = 
document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarMenu = document.getElementById("sidebarMenu");

  openToggle(sidebarToggle, sidebarMenu);
});