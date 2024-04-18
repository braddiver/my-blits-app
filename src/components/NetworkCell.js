import Blits from '@lightningjs/blits'

export default Blits.Component('NetworkCell', {
  props: ['networkName', 'number'],

  state() {
    return {
      color: '#222'
    }
  },

  template: `
    <Element ref="el" w="300" h="94" :color="$color">
      <Text x="32" y="32" :content="$networkName"/>
      <Text font="raleway" size="22" wordwrap="30" align="right" x="240" y="32" :content="$number"/>
    </Element>
  `,

  hooks: {
    focus() {
      this.color = '#000';
    },
    unfocus() {
      this.color = '#222';
    }
  }
})
