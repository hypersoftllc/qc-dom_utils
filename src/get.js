
export default function get(id, winCntx) {
  let elem = null

  winCntx = (winCntx || window)

  if (id instanceof Element) {
    elem = id
  }
  else if (typeof id === 'string') {
    elem = winCntx.document.getElementById(id)
  }
  return elem
}
