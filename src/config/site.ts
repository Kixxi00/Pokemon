export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'OptiBus',
  description: 'Travel around the world!',
  mainNav: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Admin',
      href: '/admin'
    },
    {
      title: 'Impressum',
      href: '/impressum'
    },
    {
      title: 'Privacy',
      href: '/dataprivacy'
    }
  ],
  links: {
    github: 'https://github.com/teshiification/optibus'
  }
}
