### Step 1

`yarn add @notifee/react-native`

### Step 2

Open `apps/mobile/android/build.gradle`

Add

```
maven {
    url "$rootDir/../node_modules/@notifee/react-native/android/libs"
}
```

### Step 3

Open `apps/mobile/android/app/src/main/AndroidManifest.xml`

Add `android:exported="true"`

```
    <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:theme="@style/Theme.App.SplashScreen"
      android:exported="true"
    >
```