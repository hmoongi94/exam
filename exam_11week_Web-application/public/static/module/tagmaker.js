export function createHTMLElement(tagName, attributes, content) {
  const element = document.createElement(tagName)

  if (attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key])
      }
    }
  }

  if (content) {
    if (typeof content === 'string') {
      element.textContent = content
    } else if (content instanceof HTMLElement) {
      element.appendChild(content)
    }
  }

  return element
}