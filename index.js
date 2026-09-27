const path = require('node:path');
const { createChecker } = require('vue-component-meta');

const checker = createChecker(path.join(__dirname, 'tsconfig.json'));
const meta = checker.getComponentMeta(path.join(__dirname, 'src/Comp.vue'));

const events = meta.events.map(e => e.name).sort();
const props = meta.props.filter(p => !p.global).map(p => p.name).sort();

const show = (label, expected, actual) => {
  const ok = JSON.stringify(expected) === JSON.stringify(actual);
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label}`);
  console.log(`     expected: ${JSON.stringify(expected)}`);
  console.log(`     actual:   ${JSON.stringify(actual)}`);
  return ok;
};

console.log("src/Comp.vue: defineComponent({ props: { label: String }, emits: ['open', 'close'] })\n");
const a = show('events', ['close', 'open'], events);
const b = show('props', ['label'], props);
console.log(a && b ? '\nNo bug.' : '\nBug: array emits are dropped from `events` and leak into `props` as onOpen/onClose.');
