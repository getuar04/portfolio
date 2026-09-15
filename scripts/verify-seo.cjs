const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM, VirtualConsole } = require("jsdom");
const buildRoot = path.resolve(__dirname, "..", process.env.BUILD_PATH || "build");
const html = fs.readFileSync(path.join(buildRoot, "index.html"), "utf8");
const home = "https://getuarjakupi.com/";
const dom = new JSDOM(html, { url: home });
const document = dom.window.document;
function single(selector) {
  const nodes = document.querySelectorAll(selector);
  assert.equal(nodes.length, 1, `Expected exactly one ${selector}`);
  return nodes[0];
}
assert.equal(single("title").textContent, "Getuar Jakupi | Backend Developer");
const description = single('meta[name="description"]').content;
assert.ok(description.length >= 100 && description.length <= 160);
assert.equal(single('link[rel="canonical"]').href, home);
assert.equal(single('meta[name="robots"]').content, "index, follow");
assert.equal(single('meta[property="og:url"]').content, home);
assert.equal(single('meta[property="og:type"]').content, "website");
assert.equal(single('meta[property="og:site_name"]').content, "Getuar Jakupi");
assert.equal(single('meta[property="og:title"]').content, document.title);
assert.equal(single('meta[property="og:description"]').content, description);
assert.equal(single('meta[name="twitter:card"]').content, "summary");
assert.equal(single('meta[name="twitter:title"]').content, document.title);
assert.equal(single('meta[name="twitter:description"]').content, description);
assert.equal(single('meta[charset]').getAttribute("charset"), "utf-8");
assert.ok(single('meta[name="viewport"]').content.includes("width=device-width"));
assert.equal(document.documentElement.lang, "en");
single("h1");
assert.match(document.querySelector("#home").textContent, /Getuar Jakupi/);
assert.match(document.querySelector("#home").textContent, /Computer Science and Engineering student/);
const schema = JSON.parse(single('script[type="application/ld+json"]').textContent);
assert.equal(schema["@context"], "https://schema.org");
const person = schema["@graph"].find((entity) => entity["@type"] === "Person");
const website = schema["@graph"].find((entity) => entity["@type"] === "WebSite");
assert.equal(person.url, home);
assert.equal(person.name, "Getuar Jakupi");
assert.equal(person.jobTitle, "Backend Developer");
assert.deepEqual(person.sameAs.slice().sort(), ["https://github.com/getuar04", "https://www.linkedin.com/in/getuar-jakupi"].sort());
assert.equal(website.url, home);
assert.equal(website.publisher["@id"], person["@id"]);
assert.equal(website.about["@id"], person["@id"]);
let previousLevel = 0;
for (const heading of document.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
  const level = Number(heading.tagName.slice(1));
  assert.ok(level <= previousLevel + 1, `Skipped heading level: ${heading.textContent}`);
  previousLevel = level;
}
for (const node of document.querySelectorAll("a[href],img[src],link[href],script[src]")) {
  const value = node.getAttribute("href") || node.getAttribute("src");
  assert.notEqual(value, "#", "Empty link placeholder");
  if (value.startsWith("#")) assert.ok(document.getElementById(value.slice(1)), `Broken fragment: ${value}`);
  if (value.startsWith("/")) assert.ok(fs.existsSync(path.join(buildRoot, decodeURIComponent(value))), `Missing local file: ${value}`);
  if (node.tagName === "IMG") assert.ok(node.getAttribute("alt"), `Missing alt: ${value}`);
}
const sitemap = fs.readFileSync(path.join(buildRoot, "sitemap.xml"), "utf8");
const xml = new JSDOM(sitemap, { contentType: "application/xml" });
assert.equal(xml.window.document.documentElement.namespaceURI, "http://www.sitemaps.org/schemas/sitemap/0.9");
assert.deepEqual([...xml.window.document.querySelectorAll("loc")].map((node) => node.textContent), [home]);
const robots = fs.readFileSync(path.join(buildRoot, "robots.txt"), "utf8");
assert.match(robots, /^User-agent: \*\r?\nAllow: \/\r?\n/m);
assert.match(robots, /^Sitemap: https:\/\/getuarjakupi\.com\/sitemap\.xml$/m);
assert.ok(!fs.existsSync(path.join(buildRoot, "robots.xml")));
console.log(`Static SEO checks passed: canonical, metadata (${description.length} characters), JSON-LD, sitemap, robots, headings, links and assets.`);
dom.window.close();
xml.window.close();

// Exercise the actual production bundle against its build HTML, without network
// access. DOM emulation checks hydration and interaction, not visual layout.
async function checkStartup(lang, theme, reducedMotion) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (error) => errors.push(error.message));
  virtualConsole.on("error", (...args) => errors.push(args.join(" ")));
  const page = new JSDOM(html, { url: home, runScripts: "outside-only", pretendToBeVisual: true, virtualConsole });
  const { window } = page;
  try {
    window.localStorage.setItem("gj-lang", lang);
    window.localStorage.setItem("gj-theme", theme);
    window.matchMedia = (query) => ({ matches: query.includes("reduced-motion") ? reducedMotion : theme === "light", addEventListener() {}, removeEventListener() {} });
    window.IntersectionObserver = class { observe() {} disconnect() {} };
    const originalHeading = window.document.querySelector("h1");
    for (const script of window.document.scripts) {
      if (script.type === "application/ld+json") continue;
      window.eval(script.src ? fs.readFileSync(path.join(buildRoot, new URL(script.src).pathname), "utf8") : script.textContent);
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
    assert.deepEqual(errors, [], "Production startup errors");
    assert.equal(window.document.querySelector("h1"), originalHeading, "Hydration replaced the existing page");
    assert.equal(window.document.documentElement.lang, lang);
    assert.equal(window.localStorage.getItem("gj-lang"), lang);
    assert.equal(window.document.documentElement.getAttribute("data-theme"), theme);
    const themeButton = window.document.querySelector('button[aria-pressed][aria-label="Toggle theme"],button[aria-pressed][aria-label="Ndrysho temën"]');
    themeButton.click();
    await new Promise((resolve) => setTimeout(resolve, 50));
    assert.equal(window.document.documentElement.getAttribute("data-theme"), theme === "dark" ? "light" : "dark");
    const nextLanguage = lang === "en" ? "Shqip" : "English";
    window.document.querySelector(`button[aria-label="${nextLanguage}"]`).click();
    await new Promise((resolve) => setTimeout(resolve, 450));
    assert.equal(window.document.documentElement.lang, lang === "en" ? "sq" : "en");
    assert.deepEqual(errors, [], "Production interaction errors");
    console.log(`Hydration and controls passed: ${lang}, ${theme}, reduced motion ${reducedMotion}.`);
  } finally {
    window.close();
  }
}
(async () => {
  await checkStartup("en", "dark", false);
  await checkStartup("sq", "light", true);
})().catch((error) => { console.error(error); process.exitCode = 1; });