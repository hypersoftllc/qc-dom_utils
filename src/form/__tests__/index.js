import FormUtils from '../'

describe('index.js', function () {

  it('`document` should be available', function () {
    expect(document).to.not.be.undefined
    expect(document).to.not.be.null
  })

  it('`HTMLFormElement` should be available', function() {
    expect(HTMLFormElement).to.not.be.undefined
    expect(HTMLFormElement).to.not.be.null
  })

  describe('FormUtils', function () {

    describe('.get', function () {

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

        elem = FormUtils.get('qux')
        expect(elem).to.be.instanceof(HTMLFormElement)
      })

      it('called with an `HTMLFormElement` instance should return the `HTMLFormElement` instance', function () {
        let elemIn, elemOut

        elemIn = document.getElementById('bar')
        elemOut = FormUtils.get(elemIn)

        expect(elemOut).to.equal(elemIn)
      })

      it('called with a name of a non-existing `HTMLFormElement` should return `null`', () => {
        let elem = FormUtils.get('quux')

        expect(elem).to.be.null
      })

    })

  })

})
