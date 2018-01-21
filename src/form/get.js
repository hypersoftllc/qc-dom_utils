
export default function get(formName, winCntx) {
  let formElem = null

  winCntx = (winCntx || window)

  if (formName instanceof HTMLFormElement) {
    formElem = formName
  }
  else if (typeof formName === 'string') {
    formElem = winCntx.document.forms[formName] || null
  }
  return formElem
}
