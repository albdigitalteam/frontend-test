module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
    },
    testEnvironment: 'jsdom',
};
