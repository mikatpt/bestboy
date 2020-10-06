/* eslint-disable no-unused-vars */

import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Constants from 'expo-constants';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import PlayScreen from './src/screens/PlayScreen';
import OptionsScreen from './src/screens/OptionsScreen';
import HighScoreScreen from './src/screens/HighScoreScreen';
import TestStuff from './src/screens/TestStuff';
import * as ScreenOrientation from 'expo-screen-orientation';
import {setStatusBarHidden} from 'expo-status-bar';


/*
If going to implement splash screen with AppLoading:
add these imports and shift Stack to Routes js document.
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import Routes from './screens/Routes';

class App extends React.Component {
  state = {
    isReady: false
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      );
    }

    return (
      <Routes />
    );
  }
  async _cacheResourcesAsync() { // replace these with assets that require loading.
    const images = [require('./assets/380589.jpg')];
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}

export default App;


*/

const Stack = createStackNavigator();

const App = () => {
  setStatusBarHidden(true);

  // Call to force landscape. We'll need to implement splash screen within this function - splash screen is currently called before screen orientation changes.
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
  changeScreenOrientation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          // headerShown: false
            headerTitle: '',
            headerTransparent: true,
            // headerRight: () => ( // reformat a mute button! should toggle slashed image, volume on/off
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Mute"
            //     color="#000"
            //   />
            // ),
          }} />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          // options={({ route }) => ({ title: route.params.name })}/>
          options={{
            headerTitle: 'Play',
            headerShown: false,
            headerLeft: '', // this overrides the header back button. we'll use a regular button instead!
          }}/>
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          // options={({ route }) => ({ title: route.params.name })}/>
          options={{
            headerTitle: 'Options',
            headerShown: false,
            headerLeft: '', // this overrides the header back button. we'll use a regular button instead!
          }}/>
        <Stack.Screen
          name="High Scores"
          component={HighScoreScreen}
          // options={({ route }) => ({ title: route.params.name })}/>
          options={{
            headerTitle: 'High Scores',
            headerShown: false,
            headerLeft: '', // this overrides the header back button. we'll use a regular button instead!
          }}/>
        <Stack.Screen
          name="Test"
          component={TestStuff}
          // options={({ route }) => ({ title: route.params.name })}/>
          options={{
            headerTitle: 'Test',
            headerShown: false,
            headerLeft: '', // this overrides the header back button. we'll use a regular button instead!
          }}/>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{title: 'Loading'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
