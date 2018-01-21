module.exports = {
  "plugins": [
    "chai-expect",
    "chai-friendly",
  ],
  "env": {
    "mocha": true,
  },
  "globals": {
    // For karma-chai
    "expect": true,
  },
  "rules": {
    // Turning off in favor of `chai-friendly/no-unused-expressions` rule
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "chai-expect/no-inner-compare": 2,
    "chai-expect/missing-assertion": 2,
    "chai-expect/terminating-properties": 2,
    "chai-friendly/no-unused-expressions": 2
  },
}
