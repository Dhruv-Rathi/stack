import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import Star from './star.svg';
import { Box } from '@reusejs/react-native-component-template';
import notifee from '@notifee/react-native';
// import messaging from '@react-native-firebase/messaging';

const App = () => {
  async function onAppBootstrap() {
    // // Register the device with FCM
    // await messaging().registerDeviceForRemoteMessages();
    // // Get the token
    // const token = await messaging().getToken();
    // // Save the token
    // console.log('token:', token);
  }

  async function onDisplayNotification() {
    try {
      // Create a channel
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      console.log('createChannel', channelId);

      // Display a notification
      const displayNotificationResponse = await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
          smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        },
      });

      console.log('displayNotificationResponse', displayNotificationResponse);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onAppBootstrap();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <Box />
          </View>

          <View style={styles.body}>
            <Button
              title="Display Notification"
              onPress={() => onDisplayNotification()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: '#143055',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    color: '#45bc98',
  },
  githubStarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  githubStarBadge: {
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontWeight: '600',
  },
});
export default App;
