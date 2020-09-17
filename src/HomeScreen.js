import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// HomeScreen is called in Stack.Navigator
// All items in Stack.Navigator receive the navigation prop.
// Call navigation.navigate() on the name of the route you want to move to.
const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>BestBoy (Title Graphic)</Text>
            <Button title="Play" onPress={() => navigation.navigate("Play")} />
            <Button title="High Scores" onPress={() => navigation.navigate("High Scores")} />
            <Button title="Options" onPress={() => navigation.navigate("Options")}/>
        </View>
    )
}

// we'll style these all individually and optimize later!
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
export default HomeScreen;