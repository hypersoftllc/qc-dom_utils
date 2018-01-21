
export default function get(selector, winCntx) {
  let elem = null

  winCntx = (winCntx || window)

  if (selector instanceof Element) {
    elem = selector
  }
  else if (typeof selector === 'string') {
    elem = winCntx.document.querySelector(selector)
  }
  return elem
}
