module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'buble-jest'
    },
    collectCoverageFrom: [
        'src/js/**/*.js',
        '!*.js',
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/coverage/**'
    ],
    clearMocks: true,
    restoreMocks: true,
    testEnvironment: 'jsdom'
};