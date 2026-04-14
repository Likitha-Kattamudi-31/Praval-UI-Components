// // vite.config.js
// import { defineConfig } from 'vite';
// export default {
//   resolve: {
//     alias: {
//       'date-fns/format.js': 'date-fns/format',
//       'date-fns/isValid.js': 'date-fns/isValid',
//       'date-fns/parse.js': 'date-fns/parse',
//       'date-fns/parseISO.js': 'date-fns/parseISO',
//     },
//   },
// };

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
