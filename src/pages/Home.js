import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'
import NetworkColumn from '../components/NetworkColumn.js'

export default Blits.Component('Home', {
  components: {
    Loader,
    NetworkColumn
  },
  template: `
    <Element w="1920" h="1080" color="#333">
      <NetworkColumn x="200" y="200"/>
    </Element>
  `,
})
