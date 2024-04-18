import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  props: ['networks'],

  state() {
    return {
      channelIndex: 0,
      foc: 0,
      height: 78,
      shim: 4,
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
      <NetworkCell ref="el1" y="$height" :networkName="$network1.name" :number="$network1.callSign" />
      <NetworkCell ref="el2" y="$height * 2" :networkName="$network2.name" :number="$network2.callSign" />
      <NetworkCell ref="el3" y="$height * 3" :networkName="$network3.name" :number="$network3.callSign" />
      <NetworkCell ref="el4" y="$height * 4" :networkName="$network4.name" :number="$network4.callSign" />
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
      if (this.foc === 0 && this.channelIndex > 0) {
        this.update(-- this.channelIndex);
      }

      if (this.foc > 0) {
        this.foc --;
        this.updateFocus();
      }
    },

    down() {
      if (this.foc === 4 && this.channelIndex < this.networks.length - 5) {
        this.update(++ this.channelIndex);
      }
      if (this.foc < 4) {
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
