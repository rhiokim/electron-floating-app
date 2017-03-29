const path = require('path')

const Logger = require(path.join(__dirname, '../..', 'src', 'logger'))
const TestString = '    ✓';

describe('Logger', () => {
  it('should log a message to the console', () => {
    let sut = new Logger()
    let spy = sinon.spy(console, 'log')

    sut.log(TestString)

    expect(spy.calledOnce)
    expect(spy.calledWithMatch(TestString))

    spy.restore()
  })
})
