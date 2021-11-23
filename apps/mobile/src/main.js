import { AppRegistry } from 'react-native';
import App from './app/App';
import notifee from '@notifee/react-native';

async function checkApplicationPermission() {
  const settings = await notifee.requestPermission();

  // settings only available on iOS
  if (settings) {
    if (settings.authorizationStatus) {
      console.log('User has notification permissions enabled');
    } else {
      console.log('User has notification permissions disabled');
    }
  }
}

checkApplicationPermission();

AppRegistry.registerComponent('main', () => App);
