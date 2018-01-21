import DomUtils from '../'
import get from '../get'
import FormUtils from '../form'
import focusFirstInvalid from '../form/focusFirstInvalidInputControl'
import getForm from '../form/get'

describe('index.js', function () {

  describe('DomUtils', function () {

    describe('.get', function () {

      it('is an alias', function () {
        expect(DomUtils.get).to.equal(get)
      })

    })

    describe('.form', function () {

      it('is an alias', function () {
        expect(DomUtils.form).to.equal(FormUtils)
      })

    })

    describe('.form.focusFirstInvalid', function () {

      it('is an alias', function () {
        expect(DomUtils.form.focusFirstInvalid).to.equal(focusFirstInvalid)
      })

    })

    describe('.form.get', function () {

      it('is an alias', function () {
        expect(DomUtils.form.get).to.equal(getForm)
      })

    })

  })

})
