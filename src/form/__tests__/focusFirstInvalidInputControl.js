import focusFirstInvalid from '../focusFirstInvalidInputControl'

describe('form/focusFirstInvalidInputControl.js', function () {

  it('`document` should be available', function () {
    expect(document).to.not.be.undefined
    expect(document).to.not.be.null
  })

  it('`HTMLFormElement` should be available', function () {
    expect(HTMLFormElement).to.not.be.undefined
    expect(HTMLFormElement).to.not.be.null
  })

  it('`window` should be available', function () {
    expect(window).to.not.be.undefined
    expect(window).to.not.be.null
  })

  describe('focusFirstInvalidInputControl', function () {

    beforeEach(function () {
      let fixture = `
        <div id="fixture">
          <form class="foo" id="bar" name="qux">
            <input type="text" name="firstname">
            <input type="text" name="middlename">
            <input type="text" name="lastname">
          </form>
        </div>
      `

      document.body.insertAdjacentHTML('afterbegin', fixture)
    })

    afterEach(function () {
      document.body.removeChild(document.getElementById('fixture'))
    })

    it('called with a name of an existing `HTMLFormElement` and a map of invalid input controls should focus the first invalid input control', function () {
      let elem

      elem = focusFirstInvalid('qux', { middlename: 'Required' })
      expect(elem).to.be.instanceof(HTMLInputElement)
      expect(elem.name).to.equal('middlename')
      expect(elem).to.equal(document.activeElement)

      elem = focusFirstInvalid('qux', {
        lastname: false,
        middlename: 'Required',
        firstname: 'Invalid',
      })
      expect(elem).to.be.instanceof(HTMLInputElement)
      expect(elem.name).to.equal('firstname')
      expect(elem).to.equal(document.activeElement)

      elem = focusFirstInvalid('qux', {
        firstname: false,
        lastname: false,
        middlename: 'Required',
      })
      expect(elem).to.be.instanceof(HTMLInputElement)
      expect(elem.name).to.equal('middlename')
      expect(elem).to.equal(document.activeElement)
    })

  })

})
