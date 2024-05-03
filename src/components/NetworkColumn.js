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
      network0: { sign: '', number: '' },
      network1: { sign: '', number: '' },
      network2: { sign: '', number: '' },
      network3: { sign: '', number: '' },
      network4: { sign: '', number: '' },
    }
  },

  template: `
    <Element>
      <NetworkCell ref="el0" y="0" :sign="$network0.sign" :number="$network0.number" />
      <NetworkCell ref="el1" y="$height" :sign="$network1.sign" :number="$network1.number" />
      <NetworkCell ref="el2" y="$height * 2" :sign="$network2.sign" :number="$network2.number" />
      <NetworkCell ref="el3" y="$height * 3" :sign="$network3.sign" :number="$network3.number" />
      <NetworkCell ref="el4" y="$height * 4" :sign="$network4.sign" :number="$network4.number" />
    </Element>
  `,

  methods: {
    update(index = 0) {
      for (let i = 0; i < 5; i++) {
        const [sign, number] = this.networks[index + i];
        const cell = this[`network${i}`];
        cell.sign = sign;
        cell.number = number;
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
