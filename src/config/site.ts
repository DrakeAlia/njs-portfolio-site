export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/drake___alia",
  github: "https://github.com/DrakeAlia/njs-portfolio-site",
  githubAccount: "https://github.com/DrakeAlia",
};

export const siteConfig = {
  name: "Drake Alia",
  description: "Nextjs Portfolio.",
  url: process.env.NEXT_PUBLIC_APP_URL,
  sourceCode: links.github,
  mainNav: [
    {
      title: "Home",
      href: "/",
      items: [],
    },
    {
      title: "Projects",
      href: "/projects",
      items: [],
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    //   items: [],
    // },
    {
      title: "About",
      href: "/about",
      items: [],
    },
  ],
  footerNav: [
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
      ],
    },
  ],
};
