module.exports = {
  title: "batkiz's wiki",
  tagline: "啥？我竟然还写过这东西？",
  url: "https://wiki.batkiz.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "batkiz", // Usually your GitHub org/user name.
  projectName: "wiki.batkiz.com", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/nightOwlLight"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
    },
    navbar: {
      title: "batkiz's wiki",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/batkiz/wiki.batkiz.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "LeetCode",
              to: "docs/LeetCode/",
            },
            // {
            //   label: "Second Doc",
            //   to: "docs/doc2/",
            // },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:i@batkiz.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/batkiz",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/batkizc",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Privacy",
              href: "privacy-policy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} batkiz. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/batkiz/wiki.batkiz.com/edit/main/",
        },
        blog: {
          blogTitle: "blog of batkiz's wiki",
          blogDescription: "the blog of batkiz's wiki.",
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: "https://github.com/batkiz/wiki.batkiz.com/edit/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} batkiz.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        language: ["en", "zh"],
      },
    ],
  ],
};
