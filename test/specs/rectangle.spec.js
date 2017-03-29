const path = require('path')

const Rectangle = require(path.join(__dirname, '../..', 'src', 'rectangle'))

describe('Rectangle', () => {
  describe('#width', () => {
    let rectangle

    beforeEach(() => {
      rectangle = new Rectangle(10, 20)
    })

    it('returns the width', () => {
      rectangle.width.should.equal(10)
    })

    it('can be changed', () => {
      // Assert that the width can be changed.
      rectangle.width = 30
      rectangle.width.should.equal(30)
    })

    it('only accepts numerical values', () => {
      // Assert that an error will be thrown if
      // the width it set to a non-numerical value.
      (() => {
        rectangle.width = 'foo'
      }).should.throw(Error)
    });
  });
});
