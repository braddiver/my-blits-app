import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'
import NetworkColumn from '../components/NetworkColumn.js'

export default Blits.Component('Home', {
  components: {
    Loader,
    NetworkColumn
  },

  template: `
    <Element w="1920" h="600" color="#777">
      <NetworkColumn :networks="$networks" x="200" y="100" />
    </Element>
  `,

  methods: {
    createSign(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
  },

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

      for (let i = 0; i < 1005; i++) {
        this.networks.push([this.createSign(3), i + 17])
      }
    }
  },
});
