import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  ];
  
  const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
  );
  
  const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  
    return (
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      style={{ backgroundColor }}
    />
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
    </SafeAreaView>
  );
  };
const TestScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text>Test game here.</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
  )
}

// Should have three sections: header, game, footer.


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