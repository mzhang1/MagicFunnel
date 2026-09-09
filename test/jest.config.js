/** @type {import("jest").Config} **/

export default {
  moduleNameMapper: {
    "@/(.*)$1": "<rootDir>/src/$1" 
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  }
};
