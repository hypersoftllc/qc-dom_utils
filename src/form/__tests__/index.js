import FormUtils from '../'
import focusFirstInvalid from '../focusFirstInvalidInputControl'
import get from '../get'

describe('form/index.js', function () {

  describe('FormUtils', function () {

    describe('.focusFirstInvalid', function () {

      it('is an alias', function () {
        expect(FormUtils.focusFirstInvalid).to.equal(focusFirstInvalid)
      })

    })

    describe('.get', function () {

      it('is an alias', function () {
        expect(FormUtils.get).to.equal(get)
      })

    })

  })

})
