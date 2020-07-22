module.exports = {
  moduleFileExtensions: ['js', 'json'],
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  // testTimeout: 30000,
  // setupFilesAfterEnv: ['./__tests__/config/setup.js']
  coveragePathIgnorePatterns: ['/node_modules/']
};
