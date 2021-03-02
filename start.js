const Bundler = require("parcel");
const path = require("path");
module.exports = async () => {
  const entry = path.join(__dirname, "./index.html");
  const options = {
    minifiy: true,
    watch: false,
    detailedReport: false,
    logLevel: 1,
  };
  const bundler = new Bundler(entry, options);

  await bundler.bundle();
  return bundler.options.outDir;
};
