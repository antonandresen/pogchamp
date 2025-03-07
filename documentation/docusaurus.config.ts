// @ts-nocheck
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pogchamp',
  tagline: 'A blazing fast utility library for Node.js',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pogchamp-utils.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'antonandresen', // Usually your GitHub org/user name.
  projectName: 'pogchamp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/antonandresen/pogchamp/tree/main/documentation/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as any,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Pogchamp',
      logo: {
        alt: 'Pogchamp Logo',
        src: 'img/pogchamp.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/antonandresen/pogchamp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/antonandresen/pogchamp',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/pogchamp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anton Andresen. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['typescript'],
    },
  } as any,
};

export default config;
