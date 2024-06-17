module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  transformIgnorePatterns: ["node_modules", "<rootDir>/dist/"],
};
