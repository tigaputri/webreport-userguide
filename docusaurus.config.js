// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web Report TigaPutri User Guide',
  tagline: '',
  url: 'https://tigaputr.asia',
  baseUrl: '/webreport-userguide/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // baseUrl: '/'
  //baseUrl: '/webreport-userguide/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tigaputri', // Usually your GitHub org/user name.
  projectName: 'webreport-userguide', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Web Report 3P',
        logo: {
          alt: 'Logo TigaPutri',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'User Guide',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/intro',
              },
            ],
          },
		  {
            title: 'Pembelian',
            items: [
			  {
                label: 'Software TigaPutri Edisi Premium',
                href: 'https://tigaputri.asia/harga-software-tigaputri/premium/',
              },
			  {
                label: 'Web Report TigaPutri',
                href: 'https://tigaputri.asia/harga-software-tigaputri/webreport_tigaputri/',
              },
            ],
          },
          {
            title: 'More',
            items: [
			  {
                label: 'Kontak',
                href: 'https://tigaputri.asia/tigaputri-software-pulsa/kontak-tigaputri/',
              },
              {
                label: 'Website TigaPutri',
                href: 'https://tigaputri.asia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TigaPutri. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
