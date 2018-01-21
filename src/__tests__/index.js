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

  it('`HTMLFormElement` should be available', function() {
    expect(HTMLFormElement).to.not.be.undefined
    expect(HTMLFormElement).to.not.be.null
  })

  describe('DomUtils', function () {

    describe('.get', function () {

      beforeEach(function () {
        let fixture = `
          <div id="fixture">
            <div class="foo" id="bar"></div>
          </div>
        `

        document.body.insertAdjacentHTML(
          'afterbegin',
          fixture);
      });

      afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
      });

      it('called with a selector of an existing Element should return a reference to the element instance', function () {
        let elem

        elem = DomUtils.get('.foo')
        expect(elem).to.be.instanceof(Element)

        elem = DomUtils.get('#bar')
        expect(elem).to.be.instanceof(Element)
      })

      it('called with an `Element` instance should return the `Element` instance', function () {
        let elemIn, elemOut

        elemIn = document.getElementById('bar')
        elemOut = DomUtils.get(elemIn)

        expect(elemOut).to.equal(elemIn)
      })

      it('called with an ID of a non-existing Element should return `null`', () => {
        let elem = DomUtils.get('#quux')

        expect(elem).to.be.null
      })

    })

    describe('.getForm', function () {

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

        elem = DomUtils.getForm('qux')
        expect(elem).to.be.instanceof(HTMLFormElement)
      })

      it('called with an `HTMLFormElement` instance should return the `HTMLFormElement` instance', function () {
        let elemIn, elemOut

        elemIn = document.getElementById('bar')
        elemOut = DomUtils.getForm(elemIn)

        expect(elemOut).to.equal(elemIn)
      })

      it('called with a name of a non-existing `HTMLFormElement` should return `null`', () => {
        let elem = DomUtils.getForm('quux')

        expect(elem).to.be.null
      })

    })

  })

})
