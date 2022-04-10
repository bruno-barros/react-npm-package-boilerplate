module.exports = {
  coverageReporters: [
    'json',
    'lcov',
    'text-summary'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'scss'
  ],
  modulePaths: [
    './src'
  ],
  setupFiles: [
    '<rootDir>/config/jest/setup.js'
  ],
  transform: {
    '^.+\\.(js|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ]
}