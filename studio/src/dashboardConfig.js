export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ee0a094c3e40047dbac2d8",
                  title: "Sanity Studio",
                  name: "reids-dev-blog-studio",
                  apiId: "e19a0b82-85a3-410e-8785-0d623442b6e2",
                },
                {
                  buildHookId: "61ee0a093b0be10473c6b7e7",
                  title: "Blog Website",
                  name: "reids-dev-blog",
                  apiId: "56153e5e-5708-4566-9a69-7602e55d77cc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rjfuhrman42/reids-dev-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://reids-dev-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
