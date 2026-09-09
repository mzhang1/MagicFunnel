/** @type {import("jest").Config} **/

import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.test.json";

export default {
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
