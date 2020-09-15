import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import LoadingScreen from './src/LoadingScreen';
import PlayScreen from './src/PlayScreen';

const Stack = createStackNavigator();

const App = () => {
  // header controlled by options.title. maybe later pass a screenOptions prop later?
  // to hide header, in options headerShown: false
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown: false
          headerTitle:'',
          headerTransparent: true,
          headerRight: () => ( // reformat a mute button! should toggle slashed image, volume on/off 
            <Button
              onPress={() => alert('This is a button!')}
              title="Mute"
              color="#000"
            />
          )
          }} />
        <Stack.Screen
        name="Play"
        component={PlayScreen}
        // options={({ route }) => ({ title: route.params.name })}/>
        options={{
          headerTitle:'Play',
          headerShown: false,
          headerLeft:'' // this overrides the header back button. we'll use a regular button instead!
        }}/>
        <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{title:'Loading'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;