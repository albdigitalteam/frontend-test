module.exports = {
  preset: 'react-native',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFiles: [
    //  include if necessary
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/__tests__/jest.setup.js'
  ],
  transformIgnorePatterns: [
    //  include if necessary
    'node_modules/(?!(jest-)?react-native|@?react-navigation||@react-native-community)'
  ],
  testPathIgnorePatterns: [
    //  include if necessary
    '<rootDir>/ios',
    '<rootDir>/android',
    '<rootDir>/__tests__/jest.setup.js',
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1'
  }
};
