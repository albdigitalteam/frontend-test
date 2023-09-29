// Solution for img and svg processing get from https://github.com/jestjs/jest/issues/2663
const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        return {
            code:
                'module.exports = ' +
                JSON.stringify(path.basename(filename)) +
                ';',
        };
    },
};
