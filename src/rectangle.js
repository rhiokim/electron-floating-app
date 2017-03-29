const Logger = require('./logger')

class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.logger = new Logger()
  }

  get height () {
    return this._height
  }

  set height (value) {
    if (typeof value !== 'number') {
      throw new Error('"height" must be a number.')
    }

    this._height = value
  }

  get width () {
    return this._width
  }

  set width (value) {
    if (typeof value !== 'number') {
      throw new Error('"width" must be a number.')
    }

    this._width = value
  }

  get area () {
    let result = this.width * this.height
    this.logger.log(result)
    return result
  }

  get circumference () {
    let result = 2 * this.width + 2 * this.height
    this.logger.log(result)
    return result
  }
}

module.exports = Rectangle
