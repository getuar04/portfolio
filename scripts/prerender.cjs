// Build the existing React page into static HTML; no server is needed to host it.
process.env.NODE_ENV = "production";
const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const React = require("react");
const { renderToString } = require("react-dom/server");
const sourceRoot = path.resolve(__dirname, "../src") + path.sep;
const originalLoader = require.extensions[".js"];

// Reuse CRA's installed compiler, confined to this build process and src/.
function compile(module, filename) {
  if (!filename.startsWith(sourceRoot)) return originalLoader(module, filename);
  const { code } = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("babel-preset-react-app"), { runtime: "automatic" }]],
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  });
  module._compile(code, filename);
}
require.extensions[".js"] = compile;
require.extensions[".jsx"] = compile;

const App = require("../src/App").default;
const buildRoot = path.resolve(__dirname, "..", process.env.BUILD_PATH || "build");
const file = path.join(buildRoot, "index.html");
const template = fs.readFileSync(file, "utf8");
const profile = require("../src/data/profile").default;
if (!template.includes(`rel="canonical" href="${profile.website}"`)) {
  throw new Error("Canonical URL must match the production website in src/data/profile.js");
}
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error("Missing empty React root in build HTML");
const html = renderToString(React.createElement(React.StrictMode, null, React.createElement(App)));
fs.writeFileSync(file, template.replace(placeholder, () => `<div id="root">${html}</div>`));
console.log("Prerendered the English portfolio into index.html.");
