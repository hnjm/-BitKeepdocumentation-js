module.exports = (_ctx) => ({
  sourceDir: 'docs',
  dest: 'docs/dist',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'BitKeep Docs',
      description: 'Developer documentation for BitKeep Wallet',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/bitkeep-icon.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7524F9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/bitkeep-icon.svg',
        color: '#3eaf7c',
      },
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        color: '#3eaf7c',
        type:"image/x-icon"
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { src:"/js/extend.js" }],
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    repo: 'bitkeepwallet/docs',
    docsDir: 'docs',
    editLinks: true,
    logo: '/bitkeep-icon.svg',
    smoothScroll: true,
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar(
            'Guide',
            'DApp Development',
            'Resources'
          ),
        },
      },
    },
  },


  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/',
            alternative: '/guide/',
          },
        ],
      },
    ],
    [
      'tabs',
      {
        useUrlFragment: false,
      },
    ]
  ],

  extraWatchFiles: ['.vuepress/nav/en.js'],

});

function getGuideSidebar(guide, dapp, resources) {
  return [
    {
      title: guide,
      collapsable: false,
      children: [
        ''
      ],
    },
    {
      title: dapp,
      collapsable: false,
      children: [
        'connect-wallet-for-dapp',
        'switch-network-for-dapp',
        'webview-function',
        'apply-list-for-dapp',
        'how-to-connect'
      ],
    },
    {
      title: resources,
      collapsable: false,
      children: [
        "resources"
      ],
    },
  ];
}
