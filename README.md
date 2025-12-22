# Jan's Math Blog

<!-- ## Welcome to my math blog! -->

## Welcome to my math blog!

This blog is a collection of my puzzle solutions, interesting mathematical phenomena that I have discovered as well as things that have caught my eye related to math. This blog is in a way an extension of myself, my interest in mathematics, and a way for me to share my findings with others. If you would like to check out the blog, click the link down below:

<!-- This blog posts mathematical puzzles, along with their solutions once every two weeks. The purpose of this blog is to further not only my personal mathematical, logical, and analytical mind, but to share this experience with others, so that more people can become thinkers. -->

[Jan's Math Blog](https://jans-math-blog.netlify.app)

This website uses HTML, CSS, Nunjucks, eleventy.js, and Netlify's Content Management System (CMS) which was also used as the Static Site Generator for the website. The `src` folder contains all the files that are the bulk of the site. The folder contains:

- The Nunjucks files are used as a base for creating page layouts and templates for how the blog is structured.
  - They create page layouts on the website by having default settings of where the header, content, and footer should be located on the page for example
  - They create templates for the blog posts by set requirements of what a blog should have, for example: a title, description, image, image caption, content, posted or featured, and if it should be published or not.
- The CSS files is used for styling the pages
- 3 blog articles for now all in the `blog`, two of which have been written in the admin panel and one hardcoded
- images and the logo for the blog posts are in the `assets` folder
- The `public` folder contains the backend for the website, where all the formatting of the blog posts is contained
