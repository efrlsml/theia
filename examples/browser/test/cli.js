// @ts-check
const { DEBUG_MODE } = require('@theia/core/lib/node/debug');
require('./run-test')({
    launch: {
        args: ['--no-sandbox'],
        devtools: DEBUG_MODE
    },
    collectFiles: {
        spec: ['test/*.spec.js']
    }
});
