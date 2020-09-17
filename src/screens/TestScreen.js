import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const TestScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Test game here.</Text>
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


export default TestScreen;