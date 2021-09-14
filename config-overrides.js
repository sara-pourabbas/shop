const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  // Configure path alias
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@store": path.resolve(__dirname, "src/store"),
    "@main": path.resolve(__dirname, "src/main"),
  })
);
