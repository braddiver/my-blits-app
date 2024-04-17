import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  props: ['networks'],

  state() {
    return {
      foc: 0,
      network0: { name: '', callSign: '' },
      network1: { name: '', callSign: '' },
      network2: { name: '', callSign: '' },
      network3: { name: '', callSign: '' },
      network4: { name: '', callSign: '' },
    }
  },

  template: `
    <Element>
      <NetworkCell ref="el0" y="0"   :networkName="$network0.name" :number="$network0.callSign" />
      <NetworkCell ref="el1" y="100" :networkName="$network1.name" :number="$network1.callSign" />
      <NetworkCell ref="el2" y="200" :networkName="$network2.name" :number="$network2.callSign" />
      <NetworkCell ref="el3" y="300" :networkName="$network3.name" :number="$network3.callSign" />
      <NetworkCell ref="el4" y="400" :networkName="$network4.name" :number="$network4.callSign" />
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

    updateFocus() {
      this.select(`el${this.foc}`).focus();
    }
  },

  input: {
    up() {
      if (this.foc > 0) {
        this.foc --;
        this.updateFocus();
      }
    },

    down() {
      if (this.foc < 5) {
        this.foc ++;
        this.updateFocus();
      }
    }
  },

  hooks: {
    ready() {
      this.updateFocus();
      this.update();
    }
  }
});
