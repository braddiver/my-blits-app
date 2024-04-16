import Blits from '@lightningjs/blits'

export default Blits.Component('Loading', {
  template: `
    <Element>
      <Element w="300" h="100" color="#000">
        <Text x="32" y="32" :content="$network1"/>
        <Text align="right" x="240" y="32" content="7"/>
      </Element>
    </Element>
  `,
  state() {
    return {
      alpha: 0,
      network1: 'CNN'
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.network1 = this.network1 === 'CNN' ? 'ABC' : 'CNN'
      }, 800)
    },
  },
})
