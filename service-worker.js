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
    "revision": "0d85a96b5d5ecdaad954fd8d4e2880b5"
  },
  {
    "url": "assets/css/0.styles.0452f678.css",
    "revision": "50ffc1222a000044eeafe6c080afeb34"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.6663ade4.js",
    "revision": "13b7bcd4b1e1e956cf8261b19ae3f809"
  },
  {
    "url": "assets/js/10.02bc2a80.js",
    "revision": "799d129d03cea599ac82bf3e16df8dfe"
  },
  {
    "url": "assets/js/11.4921efd7.js",
    "revision": "d62a58eab3508e12590300b84b9e4d7a"
  },
  {
    "url": "assets/js/12.88c4bff7.js",
    "revision": "4a976d0c28284535daf08293e3867a2c"
  },
  {
    "url": "assets/js/13.4ac552d4.js",
    "revision": "eca8c767f03416a7eb650d925258a1a8"
  },
  {
    "url": "assets/js/14.105a8e3d.js",
    "revision": "bfd6648cdfdf4e51dcbcc88aa2405a6a"
  },
  {
    "url": "assets/js/15.9fc09195.js",
    "revision": "2075de5e5950ea98062dfc76d3a6dc02"
  },
  {
    "url": "assets/js/16.6db17e3e.js",
    "revision": "eb0bc730c2e8a13677d06158d6593758"
  },
  {
    "url": "assets/js/17.9db2ef94.js",
    "revision": "2259f00b1c885fadcd79ca9053594662"
  },
  {
    "url": "assets/js/18.05601f70.js",
    "revision": "fe701409db3d8282925547c1ccfaea13"
  },
  {
    "url": "assets/js/3.af7f1d56.js",
    "revision": "5f764b2caf03f5959429cb04be3eec3a"
  },
  {
    "url": "assets/js/4.ba0b5ee2.js",
    "revision": "76576ab3fe857dbc417c6731a4c37086"
  },
  {
    "url": "assets/js/5.21af8e1f.js",
    "revision": "32bcd31ac597f0bb9251af7b574db7e9"
  },
  {
    "url": "assets/js/6.59eed04e.js",
    "revision": "61a3aa326b995e3a229f2899f83c8553"
  },
  {
    "url": "assets/js/7.c8650503.js",
    "revision": "6443a28e35fc4bfbfc7a9c18e6b2dc73"
  },
  {
    "url": "assets/js/8.4fb440d1.js",
    "revision": "25a691af427122c9c89996d08064443d"
  },
  {
    "url": "assets/js/9.63c5c189.js",
    "revision": "5fc2321b9ddc6cb7d9cbd295b0f86990"
  },
  {
    "url": "assets/js/app.e19c3b47.js",
    "revision": "cfd37f4af56f49012888548503b7e77e"
  },
  {
    "url": "avatar.jpg",
    "revision": "bf6af502f3d10985bcc54cb76ca57c89"
  },
  {
    "url": "categories/index.html",
    "revision": "8da3224439c4ffc1be22e0a59acca04d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "ce3d68edfc16d7df1854dae033ed3002"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "c3d674f9f6cb06bfd9d4576cf5cec12d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "726a704fa374edbe6fe18f6f77d78731"
  },
  {
    "url": "index.html",
    "revision": "414c1b4a82744487298cc6291b1b311c"
  },
  {
    "url": "logo.png",
    "revision": "5b15ba7fe8dc280a055b0f903fec69d9"
  },
  {
    "url": "logo288.png",
    "revision": "5a80bac7eabe9bdc110f7f19bafe6dc2"
  },
  {
    "url": "logo52.png",
    "revision": "65df4fb21916cf6f50bc6163bc30e841"
  },
  {
    "url": "project/flutter.html",
    "revision": "086bb303c6ca97976212b700a2aed9bd"
  },
  {
    "url": "project/intro.html",
    "revision": "915714792ede14aa4cb2c3b0f1225574"
  },
  {
    "url": "project/mp.html",
    "revision": "5354200cf5548a202802410694140bb5"
  },
  {
    "url": "project/springboot.html",
    "revision": "db71e80d3ed83582699f3d674deee7f1"
  },
  {
    "url": "project/vue.html",
    "revision": "eab82739b8c894306a6e4f403a59de79"
  },
  {
    "url": "tag/index.html",
    "revision": "cfc3bda74d386ec915ace3021f65281f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d7d813aabbeabdfe00e5f47bdc3c34cd"
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
