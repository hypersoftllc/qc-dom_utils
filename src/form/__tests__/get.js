import get from '../get'

describe('form/get.js', function () {

  it('`document` should be available', function () {
    expect(document).to.not.be.undefined
    expect(document).to.not.be.null
  })

  it('`HTMLFormElement` should be available', function() {
    expect(HTMLFormElement).to.not.be.undefined
    expect(HTMLFormElement).to.not.be.null
  })

  it('`window` should be available', function () {
    expect(window).to.not.be.undefined
    expect(window).to.not.be.null
  })

  describe('get', function () {

    beforeEach(function () {
      let fixture = `
        <div id="fixture">
          <form class="foo" id="bar" name="qux"></form>
        </div>
      `

      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
    });

    afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
    });

    it('called with a name of an existing `HTMLFormElement` should return a reference to the element instance', function () {
      let elem

      elem = get('qux')
      expect(elem).to.be.instanceof(HTMLFormElement)
    })

    it('called with an `HTMLFormElement` instance should return the `HTMLFormElement` instance', function () {
      let elemIn, elemOut

      elemIn = document.getElementById('bar')
      elemOut = get(elemIn)

      expect(elemOut).to.equal(elemIn)
    })

    it('called with a name of a non-existing `HTMLFormElement` should return `null`', () => {
      let elem = get('quux')

      expect(elem).to.be.null
    })

  })

})
