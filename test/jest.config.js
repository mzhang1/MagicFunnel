/** @type {import("jest").Config} **/

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.test.json");

module.exports = {
  preset: "ts-jest",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths), 
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest', {
        tsconfig: './test/tsconfig.test.json'
      }
    ]
  }
};
