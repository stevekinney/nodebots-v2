import rootPath from 'app-root-path';

export default {
  plugins: {
    tailwindcss: {
      config: rootPath.resolve('./tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
