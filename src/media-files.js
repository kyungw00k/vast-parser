import objectMapper from './helper/object-mapper'

import VASTError from './vast-error'
import MediaFile from './media-file'
import Mezzanine from './mezzanine'
import InteractiveCreativeFile from './interactive-creative-file'

class MediaFiles {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    if (!node.mediaFile) {
      throw new VASTError('`MediaFile` is required', 101)
    }

    if (node.mediaFile) {
      this.mediaFile = objectMapper(node.mediaFile).to(MediaFile)
    }

    this.mezzanine = objectMapper(node.mezzanine).to(Mezzanine).shift()

    if (node.interactiveCreativeFile) {
      this.interactiveCreativeFile = objectMapper(node.interactiveCreativeFile).to(InteractiveCreativeFile)
    }
  }
}

export default MediaFiles
