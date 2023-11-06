export function addToggleClassOnClick(clickElemnt, targetElement, className) {
  clickElemnt.addEventListener("click", function() {
      targetElement.classList.toggle(className)
  });
}