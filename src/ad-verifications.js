import objectMapper from './helper/object-mapper'

import Verification from './verification'

class AdVerifications {
  constructor (node) {
    if (node.verification) {
      this.verifications = objectMapper(node.verification).to(Verification)
    }
  }
}

export default AdVerifications
