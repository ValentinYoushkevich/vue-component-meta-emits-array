# vue-component-meta: array `emits` dropped

`npm start` prints expected vs actual for an Options API component with `emits: ['open', 'close']`: the events are missing from `meta.events` and leak into `meta.props` as `onOpen`/`onClose`.
