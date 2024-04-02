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
    {
      title: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ],
};
