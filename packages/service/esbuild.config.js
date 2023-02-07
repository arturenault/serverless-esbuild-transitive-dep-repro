const { nodeExternalsPlugin } = require("esbuild-node-externals");

module.exports = (serverless) => ({
  keepOutputDirectory: true,
  packager: "yarn",
  nodeExternals: {
    allowList: ["localPackage"],
    packagePath: [
      "./package.json",
      "../localPackage/package.json",
      "../../package.json",
    ],
  },
  plugins: [
    nodeExternalsPlugin({
      allowList: ["localPackage"],
      packagePath: [
        "./package.json",
        "../localPackage/package.json",
        "../../package.json",
      ],
    }),
  ],
});
