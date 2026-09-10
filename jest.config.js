/** @type {import("jest").Config} **/

export default {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1" 
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  }
};
