import { HtmlBasePlugin } from "@11ty/eleventy";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

// The site is served from https://archive.sigmod.org/ (domain root, so no prefix is needed).
// PATH_PREFIX, if set (e.g. /archive/ for a project-site copy), prefixes the links in the templates below.
// The copied pages in src/static use relative links only, so they work under any prefix.
const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  if (pathPrefix !== "/") eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addGlobalData("layout", "page.njk");

  // Cache-busting: "/assets/site.css" | v  ->  "/assets/site.css?v=<first 8 hex of the file's MD5>".
  // The link changes only when the file does, so browsers fetch new CSS/JS right after a deploy.
  eleventyConfig.addFilter("v", (url) => {
    const rel = url.replace(/^\/assets\//, "");
    const file = path.join("src/assets", rel);
    if (!fs.existsSync(file)) return url;
    return url + "?v=" + crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
  });
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());
  // A www.sigmod.org path ("/join/") as a full URL; full URLs pass through
  eleventyConfig.addFilter("www", (u) => (u && u.startsWith("/") ? "https://www.sigmod.org" + u : u));
  eleventyConfig.addFilter("date", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }));

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  // Files in src/static are copied as they are, never rendered
  eleventyConfig.ignores.add("src/static/**");

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    pathPrefix,
  };
}
