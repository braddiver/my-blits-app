import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  props: ['networks'],

  state() {
    return {
      network0: { name: '', callSign: '' },
      network1: { name: '', callSign: '' },
      network2: { name: '', callSign: '' },
      network3: { name: '', callSign: '' },
      network4: { name: '', callSign: '' },
    }
  },

  template: `
    <Element>
      <NetworkCell y="0"   :networkName="$network0.name" :number="$network0.callSign" />
      <NetworkCell y="100" :networkName="$network1.name" :number="$network1.callSign" />
      <NetworkCell y="200" :networkName="$network2.name" :number="$network2.callSign" />
      <NetworkCell y="300" :networkName="$network3.name" :number="$network3.callSign" />
      <NetworkCell y="400" :networkName="$network4.name" :number="$network4.callSign" />
    </Element>
  `,

  methods: {
    update(index = 0) {
      for (let i = 0; i < 5; i++) {
        const [networkName, callSign] = this.networks[index + i];
        const cell = this[`network${i}`];
        cell.name = networkName;
        cell.callSign = callSign;
      }
    },
  },

  hooks: {
    ready() {
      this.update();
    }
  }
});
