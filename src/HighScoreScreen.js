import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HighScoreScreen = ({navigation}) => {
    return ( // Change these text boxes to proper buttons or toggles as necessary!
        <View style={styles.container}>
            <Text>Format High scores on this page.</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

// will refactor later!
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


export default HighScoreScreen;