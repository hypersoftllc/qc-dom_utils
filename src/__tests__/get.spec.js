import get from '../get'

describe('get.js', function () {

  it('`document` should be available', function () {
    expect(document).to.not.be.undefined
    expect(document).to.not.be.null
  })

  it('`Element` should be available', function () {
    expect(Element).to.not.be.undefined
    expect(Element).to.not.be.null
  })

  it('`window` should be available', function () {
    expect(window).to.not.be.undefined
    expect(window).to.not.be.null
  })

  describe('get', function () {

    beforeEach(function () {
      let fixture = `
        <div id="fixture">
          <div class="foo" id="bar"></div>
        </div>
      `

      document.body.insertAdjacentHTML('afterbegin', fixture)
    })

    afterEach(function () {
      document.body.removeChild(document.getElementById('fixture'))
    })

    it('called with a selector of an existing Element should return a reference to the element instance', function () {
      let elem

      elem = get('.foo')
      expect(elem).to.be.instanceof(Element)

      elem = get('#bar')
      expect(elem).to.be.instanceof(Element)
    })

    it('called with an `Element` instance should return the `Element` instance', function () {
      let elemIn, elemOut

      elemIn = document.getElementById('bar')
      elemOut = get(elemIn)

      expect(elemOut).to.equal(elemIn)
    })

    it('called with an ID of a non-existing Element should return `null`', () => {
      let elem = get('#quux')

      expect(elem).to.be.null
    })

  })

})
