import getForm from './get'

/**
 * Focuses the first invalid input control found in the form.  What is considered
 * first is based on the order of the input controls found in the DOM.  That is,
 * the input control's `tabindex` or it's visual appearance is not taken into
 * account.
 *
 * @param {string} formName - The name of the form which may have invalid input
 *   controls.
 * @param {object} errors - An object where each key is the name of an input control
 *   in the form.  If the value associated with it is truthy, then it indicates
 *   that this input control is invalid.  If the value associated with it is
 *   falsey, then the input control will not be considered a candidate to be
 *   focused.
 *
 * @returns {HTMLButtonElement|HTMLInputElement|HTMLSelectElement|HTMLTextareaElement}
 *   The first invalid input control or `null` if not found.
 */
export default function focusFirstInvalidInputControl(formName, errors = {}) {
  let elmts, form

  form = getForm(formName)
  elmts = (form || {}).elements || []
  for (let i = 0, iLen = elmts.length; i < iLen; ++i) {
    let elmt = elmts[i]
    // If invalid, then...
    if (errors[elmt.name]) {
      elmt.focus()
      return elmt
    }
  }
  return null
}
