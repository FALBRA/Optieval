
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25303, hash: '19c80f672e2bba1d5e2eef72b11910efce89a1fd66e0888b9be7b3205f44e00a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17054, hash: 'cac93c4f33702b6fe1805022c8d04e80f97fa990063e62f38a99259cd40677bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53218, hash: 'c57d95191d6b464ebb9ff82b5b10d5962e314358789b86f6e65d36781560360a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-L4DWR56F.css': {size: 8802, hash: 'MhcIfQAqNoM', text: () => import('./assets-chunks/styles-L4DWR56F_css.mjs').then(m => m.default)}
  },
};
