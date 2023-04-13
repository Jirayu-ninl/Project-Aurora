import { App } from './canvas'
import { App as App3D } from './canvas3d'
import Overlay from './overlay'
import Blogs from './blogs'

const setExport = {
  Projects: {
    Canvas: App,
    Canvas3D: App3D,
    Overlay: Overlay,
  },
  Blogs: Blogs,
}

export default setExport
