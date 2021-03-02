const Parcel = require("@parcel/core").default;
const createWorkerFarm = require("@parcel/core").createWorkerFarm;
const path = require("path");
module.exports = async () => {
  const distDir = path.join(__dirname, "./dist");
  const options = {
    entries: path.join(__dirname, "./index.html"),
    defaultConfig: require.resolve("@parcel/config-default"),
    defaultTargetOptions: {
      shouldOptimize: true,
      engines: {
        browsers: ["last 1 Chrome version"],
        node: "14",
      },
      distDir,
    },
    shouldPatchConsole: false,
    watch: false,
    mode: "production",
    detailedReport: { assetsPerBundle: 0 },
    logLevel: "error",
  };
  const bundler = new Parcel(options);

  await bundler.run();
  return distDir;
};
