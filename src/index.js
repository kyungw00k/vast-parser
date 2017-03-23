import objectMapper from './helper/object-mapper'
import JXONTree from './helper/jxon-tree'
import VAST from './VAST'

function parseFromXML (xml, option = {}) {
  return objectMapper(JXONTree.fromXML(xml, option)).to(VAST).shift()
}

export {
  parseFromXML
}
