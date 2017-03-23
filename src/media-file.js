class MediaFile {
  /**
   * @param {JXONTree} node
   */
  constructor (node) {
    this.delivery = node.attr('delivery')
    this.type = node.attr('type')
    this.width = node.attr('width')
    this.height = node.attr('height')
    this.codec = node.attr('codec')
    this.id = node.attr('id')
    this.bitrate = node.attr('bitrate')
    this.minBitrate = node.attr('minBitrate')
    this.maxBitrate = node.attr('maxBitrate')
    this.scalable = node.attr('scalable')
    this.maintainAspectRatio = node.attr('maintainAspectRatio')
    this.apiFramework = node.attr('apiFramework')
    this.uri = node.keyValue
  }
}

export default MediaFile
