import DomUtils from '../'

describe('index.js', function () {

  it('`document` should be available', function () {
    expect(document).to.not.be.undefined
    expect(document).to.not.be.null
  })

  it('`Element` should be available', function() {
    expect(Element).to.not.be.undefined
    expect(Element).to.not.be.null
  })

  it('`window` should be available', function () {
    expect(window).to.not.be.undefined
    expect(window).to.not.be.null
  })

  describe('DomUtils', function () {

    describe('.get', function () {

      beforeEach(function () {
        let fixture = `
          <div id="fixture">
            <div id="foo"></div>
          </div>
        `

        document.body.insertAdjacentHTML(
          'afterbegin',
          fixture);
      });

      afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
      });

      it('called with an ID of an existing Element should return a reference to the element instance', function () {
        let elem

        elem = DomUtils.get('foo')
        expect(elem).to.be.instanceof(Element)
      })

      it('called with an `Element` instance should return the `Element` instance', function () {
        let elemIn, elemOut

        elemIn = document.getElementById('foo')
        elemOut = DomUtils.get(elemIn)

        expect(elemOut).to.equal(elemIn)
      })

      it('called with an ID of a non-existing Element should return `null`', () => {
        let elem = DomUtils.get('quux')

        expect(elem).to.be.null
      })

    })

  })

})
