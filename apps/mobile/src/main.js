import { AppRegistry } from 'react-native';
import App from './app/App';
import '@react-native-firebase/app';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

async function onMessageReceived(message) {
  try {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const displayNotificationResponse = await notifee.displayNotification({
      title: 'Notifee:' + message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      },
    });
  } catch (e) {
    console.log(e);
  }

  // notifee.displayNotification(JSON.parse(message.data.notifee));
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } catch (error) {
    console.log('requestUserPermission', error);
  }
}

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
requestUserPermission();

AppRegistry.registerComponent('main', () => App);
