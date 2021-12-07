import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  onChangeText
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import Star from './star.svg';
import { Box } from '@reusejs/react-native-component-template';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { Base as Button } from '@reusejs/react-native-buttons';
import { Base as Input } from '@reusejs/react-native-text-inputs';
const App = () => {

  const [value, setValue] = useState();
  async function onAppBootstrap() {
    try {
      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();
      // Get the token
      const token = await messaging().getToken();
      // Save the token
      console.log('token:', token);
    } catch (error) {
      console.log('onAppBootstrap', error);
    }
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
    <View style={{padding: 20}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            
          </View>
          <View style={{marginLeft: 10, marginTop: 20, marginBottom: 40}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>
              Sign Up
            </Text>
            <Text>
              Let's start with yours mobile number
            </Text>
            </View>
            <View style={{marginLeft: 10, marginRight: 10,}}>
              <Input 
                
                label="Mobile Number"
                placeholder="Enter Mobile Number"
                onChangeText={setValue}
                value={value}
                icon={<Text>+91</Text>}
                labelTextColor="#3B82F6"
                iconPosition="left"
                borderColor="#3B82F6"
                focusColor="#3B82F6"
                textColor="#000"
                
              />
              
            </View>
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Text>
                We never share your data without your consent
              </Text>
            </View>
            <View style={{marginLeft: 10, flexDirection: 'row', marginTop: 300}}>
              <Text>
                By signing up, you agree to our
              </Text>
            <Text style={{textDecorationLine: 'underline'}}> Terms of Use</Text>
              <Text> and </Text>
              </View>
              <View style={{marginLeft: 10}}>
              <Text style={{textDecorationLine: 'underline'}}>
                Privacy Policy.
              </Text>
                </View>
          <View style={styles.body}>
            <Button
              onPressColor="#2563EB"
              backgroundColor="#3B82F6"
              borderColor="#2563EB"
              onPress={() => onDisplayNotification()}
            >
              Send Security Code
            </Button>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center',}}>
            <Text style={{fontSize: 16}}>
              Already have an account?
            </Text>
            <Text style={{color: '#3B82F6', fontSize: 16, fontWeight: 'bold'}}>  Log in</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
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
    padding: 10,
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
