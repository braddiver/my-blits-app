import { NetworkCell } from './NetworkCell.js'

export default NetworkCell('NetworkCell', {
  components: {
    NetworkCell
  },

  template: `
    <Element>
      <Element w="340" h="80" color="#1e293b" :alpha="$alpha">
         <Text content="CNN"/>
      </Element>
    </ELement>
  `,

  state() {
    return {
      alpha: 0.5
    }
  }
})
