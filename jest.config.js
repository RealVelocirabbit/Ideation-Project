module.exports = {
  // options that allow us collect "coverage data" info about our jest tests and store in a folder called "coverage"
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js,jsx}'],
  // coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
}