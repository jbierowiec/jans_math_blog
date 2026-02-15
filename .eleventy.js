const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/js");

  // Filter for blog post dates
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Filter that returns the current year as "yyyy"
  eleventyConfig.addFilter("year", () => {
    return DateTime.now().toFormat("yyyy");
  });

  // Global current year
  eleventyConfig.addGlobalData("currentYear", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
