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
        [ 'ABC', 7 ],
        [ 'BOS', 8 ],
        [ 'CNN', 9 ],
        [ 'DIY', 10 ],
        [ 'ESPN', 11 ],
        [ 'FAR', 12 ],
        [ 'GUT', 13 ],
        [ 'HIT', 14 ],
        [ 'ICE', 15 ],
        [ 'JK', 16 ]
      ];
    }
  },
});
