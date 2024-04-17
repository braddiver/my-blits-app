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
      <NetworkColumn :networks="$networks" x="200" y="200" />
    </Element>
  `,

  hooks: {
    init() {
      this.networks = [
        [ 'A', 7 ],
        [ 'B', 8 ],
        [ 'C', 9 ],
        [ 'D', 10 ],
        [ 'E', 11 ],
        [ 'F', 12 ],
        [ 'G', 13 ],
        [ 'H', 14 ],
        [ 'I', 15 ],
        [ 'J', 16 ]
      ];
    }
  },
});
