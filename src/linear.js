import objectMapper from './helper/object-mapper'

import MediaFiles from './media-files'
import AdParameters from './ad-parameters'
import Tracking from './tracking'
import VideoClicks from './video-clicks'

class Linear {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.skipoffset = node.attr('skipoffset') || undefined

    // TODO: parse HH:MM:SS.mmm (.mmm is optional)
    this.duration = node.duration ? node.duration.keyValue : undefined

    this.mediaFiles = objectMapper(node.mediaFiles).to(MediaFiles).shift()
    this.adParameters = objectMapper(node.adParameters).to(AdParameters).shift() // FIXME: check bounded option

    if (node.trackingEvents && node.trackingEvents.tracking) {
      this.trackingEvents = objectMapper(node.trackingEvents.tracking).to(Tracking)
    }

    this.videoClicks = objectMapper(node.videoClicks).to(VideoClicks).shift()
  }
}

export default Linear
