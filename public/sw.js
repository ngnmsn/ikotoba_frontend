// if(!self.define){let e,i={};const o=(o,r)=>(o=new URL(o+".js",r).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const s=e=>o(e,c),d={module:{uri:c},exports:t,require:s};i[c]=Promise.all(r.map((e=>d[e]||s(e)))).then((e=>(n(...e),t)))}}define(["./workbox-67560190"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"391b550a684e78488ee9cf7831068e05"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
// //# sourceMappingURL=sw.js.map

// self.addEventListener("push", event => {
//   // 通知設定が行われているかをチェック
//   if (!self.Notification || self.Notification.permission !== "granted") {
//     // 通知設定が行われていなければ何もせず終了
//     return;
//   }

//   // 送信されたデータを取得
//   if (event.data) {
//     console.log(JSON.stringify(event.data));
//     const data = JSON.parse(event.data.text());

//       event.waitUntil(
//       // push通知を実際に表示するところ
//       self.registration.showNotification(data.notification.title, {
//         body: data.notification.body,
//       })
//     );
//     console.log("Push Notification Received");
//   }
// });