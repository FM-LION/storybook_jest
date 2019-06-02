module.exports = {
    transform: {
      '.(ts|tsx)': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};