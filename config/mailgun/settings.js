import settings from './default'
import override from './override'

Object.keys(override).forEach((key) => {
  settings[key] = override[key]
})

export default settings
