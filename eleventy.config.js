module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/bilder");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addCollection("jobb", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/jobb/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};