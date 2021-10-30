- The first thing we did is - npx create-nx-workspace@latest with an empty setup

### Setup React Application - Dashboard

- Add react plugin : `yarn add -D @nrwl/react`
- Create react application : `yarn nx g @nrwl/react:application dash --js` (With None as CSS Preset)
- Run Dashboard `yarn nx serve dash`
- Add styles.css with @tailwind annotations
- Add tailwind.config.js inside dash
- Add postcss.config.js at root
- Edit project.json add tailwind command to compile minified version
- To build this: `yarn nx build dash`

### Setup Nextjs Application - Landing

- Add plugin: `yarn add @nrwl/next --dev`
- Create application: `yarn nx g @nrwl/next:app land --js` 
- Run Dashboard `yarn nx serve land`
- Add styles.css with @tailwind annotations
- Add tailwind.config.js inside land
- Export `yarn nx export land`


### Helpers

- To remove an application `npx nx g @nrwl/workspace:remove <app-name>`

### Setup React Native Mobile Application - Landing


https://github.com/nrwl/nx-react-native

`yarn nx g @nrwl/react-native:app mobile --js`


Bundler: `yarn nx start mobile`

Android: `yarn nx run-android mobile`

iOS: `yarn nx run-ios mobile --install`