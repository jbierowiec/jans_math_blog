const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // Existing filter for blog post dates
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // NEW: simple filter that returns the current year as "yyyy"
  eleventyConfig.addFilter("year", () => {
    return DateTime.now().toFormat("yyyy");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
