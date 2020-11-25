module.exports = {
  title: "OpenEEW",
  tagline: "Build an earthquake early-warning system for your community",
  url: "https://openeew.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "openeew", // Usually your GitHub org/user name.
  projectName: "openeew-docs", // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: "GOOGLEANALYTICS_KEY_REPLACE",
    },
    algolia: {
      apiKey: "ALGOLIA_API_KEY_REPLACE",
      indexName: "openeew",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    announcementBar: {
      id: "slack", // Any value that will identify this message.
      content:
        '♥ Join the community on <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/openeew/shared_invite/zt-cibhc0za-XKReMPobi2DsrPusORJZVQ">Slack</a> ♥',
      backgroundColor: "#ffe93f", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    navbar: {
      title: "",
      logo: {
        alt: "OpenEEW Logo",
        src: "img/logo_2020.svg",
        srcDark: "img/logo_2020_dark.svg", // Default to `logo.src`.
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/openeew",
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
              label: "Introduction",
              to: "docs/introduction/",
            },
            {
              label: "Get Started",
              to: "docs/read-first/",
            },
            {
              label: "Roadmap",
              href: "https://github.com/openeew/openeew/projects/1",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/openeew",
            },
            {
              label: "Slack",
              href:
                "https://join.slack.com/t/openeew/shared_invite/zt-cibhc0za-XKReMPobi2DsrPusORJZVQ",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/openeew",
            },
            {
              label: "Custom solutions",
              href: "https://grillo.io",
            },
          ],
        },
      ],
      logo: {
        alt: "OpenEEW Logo",
        src: "img/OpenEEW_logo.svg",
      },
      copyright: `Copyright © 2020 OpenEEW Project a Series of LF Projects, LLC.  
      OpenEEW is a <a target="_blank" rel="noopener noreferrer" href="https://www.linuxfoundation.org/projects/code-and-response/">Call for Code® with The Linux Foundation project</a>.
      OpenEEW is a trademark of LF Projects, LLC.  
      For trademark usage guidelines, privacy and cookie policies, and other applicable policies, as well as terms and conditions governing this web site, please see www.lfprojects.org`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/openeew/openeew-docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/openeew/openeew-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
