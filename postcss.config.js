const PROCESS = process.argv[3];
const [project, runner] = PROCESS.split(':');

const tailwindConfigPath = `./apps/${project}/tailwind.config.js`;

console.log('tailwindConfigPath ---> ', tailwindConfigPath);

module.exports = {
  plugins: {
    tailwindcss: { config: tailwindConfigPath },
    autoprefixer: {},
  },
};
