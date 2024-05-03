import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  props: ['channels'],

  state() {
    return {
      channelIndex: 0,
      focusIndex: 0,
      height: 78,
      channel0: { sign: '', number: '' },
      channel1: { sign: '', number: '' },
      channel2: { sign: '', number: '' },
      channel3: { sign: '', number: '' },
      channel4: { sign: '', number: '' },
    }
  },

  template: `
    <Element>
      <NetworkCell ref="el0" y="0" :sign="$channel0.sign" :number="$channel0.number" />
      <NetworkCell ref="el1" y="$height" :sign="$channel1.sign" :number="$channel1.number" />
      <NetworkCell ref="el2" y="$height * 2" :sign="$channel2.sign" :number="$channel2.number" />
      <NetworkCell ref="el3" y="$height * 3" :sign="$channel3.sign" :number="$channel3.number" />
      <NetworkCell ref="el4" y="$height * 4" :sign="$channel4.sign" :number="$channel4.number" />
    </Element>
  `,

  methods: {
    update(index = 0) {
      for (let i = 0; i < 5; i++) {
        const [sign, number] = this.channels[index + i];
        const cell = this[`channel${i}`];
        cell.sign = sign;
        cell.number = number;
      }
    },

    updateFocus() {
      this.select(`el${this.focusIndex}`).focus();
    }
  },

  input: {
    up() {
      if (this.focusIndex === 0 && this.channelIndex > 0) {
        this.update(-- this.channelIndex);
      }

      if (this.focusIndex > 0) {
        this.focusIndex --;
        this.updateFocus();
      }
    },

    down() {
      if (this.focusIndex === 4 && this.channelIndex < this.channels.length - 5) {
        this.update(++ this.channelIndex);
      }
      if (this.focusIndex < 4) {
        this.focusIndex ++;
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
