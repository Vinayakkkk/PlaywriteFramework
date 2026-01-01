module.exports = {
  default: {
    require: [
      "src/support/**/*.ts",
      "src/steps/**/*.ts",
      "src/pages/**/*.ts",
      "src/hooks/**/*.ts",
      "src/report/**/*.js"
    ],
    requireModule: ["ts-node/register"],
    format: ['progress','json:reports/cucumber-report.json'],
    paths: ["features/**/*.feature"],
    publishQuiet: true
  }
};
