import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  props: ['networks'],

  state() {
    return {
      network0: '',
      network1: '',
      network2: '',
      network3: '',
      network4: '',
      callSign0: '',
      callSign1: '',
      callSign2: '',
      callSign3: '',
      callSign4: '',
    }
  },

  template: `
    <Element>
      <NetworkCell y="0"   :networkName="$network0" :number="$callSign0" />
      <NetworkCell y="100" :networkName="$network1" :number="$callSign1" />
      <NetworkCell y="200" :networkName="$network2" :number="$callSign2" />
      <NetworkCell y="300" :networkName="$network3" :number="$callSign3" />
      <NetworkCell y="400" :networkName="$network4" :number="$callSign4" />
    </Element>
  `,

  methods: {
    update(index = 0) {
      for (let i = 0; i < 5; i++) {
        const [networkName, callSign] = this.networks[index + i];
        this[`network${i}`] = networkName;
        this[`callSign${i}`] = callSign;
      }
    },
  },

  hooks: {
    ready() {
      this.update();
    }
  }
});
