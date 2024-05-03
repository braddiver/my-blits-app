import Blits from '@lightningjs/blits'

const bgColor = "{left: 'rgb(42, 66, 66)', right: 'rgb(42, 73, 76)'}"
const focusColor = "{left: 'rgb(22, 46, 56)', right: 'rgb(22, 53, 56)'}"

export default Blits.Component('NetworkCell', {
  props: ['sign', 'number'],

  state() {
    return {
      color: bgColor
    }
  },

  template: `
    <Element ref="el" w="400" h="70" :color="$color">
      <Text mount="{y: 0.5}" x="20" y="35" :content="$sign"/>
      <Text alpha="0.6" wordwrap="30" align="right" x="340" mount="{y: 0.5}" y="35"  :content="$number"/>
    </Element>
  `,

  hooks: {
    focus() {
      this.color = focusColor;
    },
    unfocus() {
      this.color = bgColor;
    }
  }
})
