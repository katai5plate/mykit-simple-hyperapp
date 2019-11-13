module.exports = () =>
  require("mykit-core")(
    __dirname,
    [{ src: ".babelrc" }, { src: "index.html" }, { src: "index.jsx" }],
    {
      scripts: {
        start: "parcel index.html",
        "mykit-install": "yarn add hyperapp && yarn add -D parcel-bundler"
      }
    }
  );
