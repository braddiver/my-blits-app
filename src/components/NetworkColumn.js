import Blits from '@lightningjs/blits'
import NetworkCell from './NetworkCell.js'

export default Blits.Component('NetworkColumn', {
  components: {
    NetworkCell
  },

  template: `
    <Element>
      <NetworkCell networkName="ESPN" number="6" />
      <NetworkCell y="100" networkName="CNN" number="7" />
      <NetworkCell y="200" networkName="PIG" number="8" />
      <NetworkCell y="300" networkName="NBC" number="9" />
      <NetworkCell y="400" networkName="ABC" number="11" />
    </Element>
  `
})
