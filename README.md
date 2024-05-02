## Built on top of

New Blits Lightning 3 App Get Started project
https://lightningjs.io/v3-docs/blits/getting_started/getting_started.html

## Fast scrolling column component for large data-set

NetworkColumn uses no animation or real "scrolling"
Instead has a fixed number of rows, and the next 5 items (of a 1000 items) text (name and number) update as the user presses up and down arrow keys.
https://github.com/braddiver/my-blits-app/blob/main/src/components/NetworkColumn.js

## Used as a demo to compare development in 2 Lightning3 frameworks

lightning-js/blits:
https://lightningjs.io/v3-docs/blits/components/component_state.html

lightning-js/solid:
https://lightning-js.github.io/solid/#/

## Solid-JS version of the same NetworkColumn component is here:

https://github.com/braddiver/lightn3solidstart/blob/main/src/components/NetworkColumn.tsx

## Issues

Unlike the Solid-JS version I was unable to:

- Use a loop utility component in the markup to generate the 5 rows:
  https://github.com/braddiver/my-blits-app/blob/3cff5ede832e291c680076836db01a9b04b93679/src/components/NetworkColumn.js#L25
