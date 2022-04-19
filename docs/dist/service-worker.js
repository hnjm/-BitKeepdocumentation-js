/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7114d20479c13d7d1365582f7997ba94"
  },
  {
    "url": "assets/css/0.styles.00514bcc.css",
    "revision": "f6e142f5c9defa76d1b7b37a62aad7b0"
  },
  {
    "url": "assets/img/isBitkeep.578a705b.png",
    "revision": "578a705b3cec52f927a70951d8107b72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7318497e.js",
    "revision": "04cb44b840360f77c9c6feceaee9475d"
  },
  {
    "url": "assets/js/11.03548870.js",
    "revision": "6b359fbe8851c0fb277b4e74315eaf4d"
  },
  {
    "url": "assets/js/12.66a78376.js",
    "revision": "22a3746adfd61bfa3bde59d1f45e1a9d"
  },
  {
    "url": "assets/js/13.ae3d895e.js",
    "revision": "a590ba85811385bbf1e5ba7b0b994e1b"
  },
  {
    "url": "assets/js/14.5bf8ba11.js",
    "revision": "0a795904447a3863940cb97b769f6133"
  },
  {
    "url": "assets/js/15.c85f1373.js",
    "revision": "b29f42881cdf9a6060ba5d9a8f607490"
  },
  {
    "url": "assets/js/16.dfb1a745.js",
    "revision": "17582960795528e727d4fb0b5beec759"
  },
  {
    "url": "assets/js/17.37344bc9.js",
    "revision": "5b16120ba22816a92afab9883b29d0ce"
  },
  {
    "url": "assets/js/18.b268993d.js",
    "revision": "ac07c2ba01064a1bf65d2c5228f2158b"
  },
  {
    "url": "assets/js/4.a4145433.js",
    "revision": "6c81796c72478f88ee5c607dcd05a7b5"
  },
  {
    "url": "assets/js/5.c8319a50.js",
    "revision": "f9783001366afedb9fc4e95b307c1379"
  },
  {
    "url": "assets/js/6.a91be2c2.js",
    "revision": "82ad96505df6f1c2a7d8e48877a2f83d"
  },
  {
    "url": "assets/js/7.e34a9b8e.js",
    "revision": "0a25a12649e2fdbefeb99ec41356ac24"
  },
  {
    "url": "assets/js/8.e298b187.js",
    "revision": "f803fb2c0faa720071ccd9014da470a6"
  },
  {
    "url": "assets/js/9.8c5e6e6a.js",
    "revision": "281cbd30264d64336826c87c6f4754b4"
  },
  {
    "url": "assets/js/app.ccea9a8d.js",
    "revision": "f3432e059e0288ead2d9f2c89eeee8b1"
  },
  {
    "url": "assets/js/vendors~docsearch.21f21cd2.js",
    "revision": "eef0e2a94dc0a8e6971dabc305f2c1d2"
  },
  {
    "url": "assets/js/vendors~notification.5d550903.js",
    "revision": "d1dc1fec755fe364777c541bd66095cb"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "e54a9b6ea83197479e55ef3db6137a49"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "b7606249b6e069f5c85809c1e7a55e40"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "f6a78c16aa52a85c2e94a9545f98aa2e"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "a46253e5d42064e09ffff67d988e15be"
  },
  {
    "url": "guide/index.html",
    "revision": "f72cb0759829408fba1e5c891525282c"
  },
  {
    "url": "guide/resources.html",
    "revision": "bf82b389c9e5836d1c670c4a27c87f3b"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "123d8dcd79cfd044d6ccff0ef9d135e5"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "5152d5af97f012612d2264688ea6b4d3"
  },
  {
    "url": "js/extend.js",
    "revision": "72be7e57c00f970964d73a7990440b8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
