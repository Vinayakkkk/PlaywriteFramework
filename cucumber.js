module.exports = {
  default: {
    require: [
      "src/support/**/*.ts",
      "src/steps/**/*.ts",
      "src/pages/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress"],
    paths: ["features/**/*.feature"],
    publishQuiet: true
  }
};
