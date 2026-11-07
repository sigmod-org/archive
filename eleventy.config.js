import { HtmlBasePlugin } from "@11ty/eleventy";

// The site is served from https://sigmod-org.github.io/archive/ until it has its own domain.
// PATH_PREFIX=/archive/ (set in the workflow) prefixes the links in the templates below.
// The copied pages in src/static use relative links only, so they work under any prefix.
const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  if (pathPrefix !== "/") eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addGlobalData("layout", "page.njk");
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
