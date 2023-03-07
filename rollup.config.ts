import ts from "rollup-plugin-ts";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const inputs = [
  {
    file1: "src/file1.ts",
  },
  {
    file2: "src/file2.ts",
  },
];

export default inputs.map((input) => ({
  input,
  output: {
    dir: "build",
    format: "cjs",
    entryFileNames: "[name].js",
    chunkFileNames: "[name].js",
  },
  plugins: [
    ts({
      tsconfig: "tsconfig.json",
    }),
    resolve(),
    commonjs(),
  ],
}));
