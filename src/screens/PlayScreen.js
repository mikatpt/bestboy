import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const PlayScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Campaign</Text>
      <Text>Practice Mode</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// will refactor later!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default PlayScreen;
