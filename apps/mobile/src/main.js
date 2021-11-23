import { AppRegistry } from 'react-native';
import App from './app/App';
import '@react-native-firebase/app';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

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
// requestUserPermission();

AppRegistry.registerComponent('main', () => App);
