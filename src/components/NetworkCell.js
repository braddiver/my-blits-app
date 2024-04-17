import Blits from '@lightningjs/blits'

export default Blits.Component('NetworkCell', {
  props: ['networkName', 'number'],

  template: `
    <Element w="300" h="100" color="#000">
      <Text x="32" y="32" :content="$networkName"/>
      <Text align="right" x="240" y="32" :content="$number"/>
    </Element>
  `,
})
