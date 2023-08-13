import rootPath from 'app-root-path';

export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {
      config: rootPath.resolve('./tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
