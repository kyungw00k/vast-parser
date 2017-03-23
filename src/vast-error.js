'use strict'

class VASTError extends Error {
  constructor (message, code) {
    super(`'VAST Error': ${(message || 'Unidentified errors')}(${code || 900})}`, code || 900)
  }
}

export default VASTError
