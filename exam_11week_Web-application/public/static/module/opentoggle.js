export const openToggle = (eventTarget, openTarget) => {
  // target = document.getElementById("sidebarToggle")
  eventTarget.addEventListener("click", function () {
    openTarget.classList.toggle('open')
  })
}