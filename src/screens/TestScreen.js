import React, { useState, PureComponent } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { GameEngine, GameLoop } from "react-native-game-engine";
import { AppRegistry, Button, Dimensions, FlatList, Header, Image, ImageBackground, LogBox, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Entities from './src/entities'

// backgroundImage should be tied to its corresponding assets.
const backgroundImage = require('../assets/GripTruckCOPY.png');
const stand = require('../assets/LargeStandCopy.png');
// we'll change this later!
// format will be something like:
// object =
// {
//   largeStand1: {source: URL, location: {x: XLOCATION, y: YLOCATION}},
//   smallStand: {source: URL, location: {x: XLOC, y: YLOC}},
//   etc.
// }

const pause = require('../assets/pauseButton.png');


const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

// We're working with a grip truck. There are set areas for set items
// We should have a version of the truck with NO items. When we load the game, the game should populate the truck with all its items.
// so we need an object that contains all items. This object should have the ID of the item, asset image location, and truck dimension location.
// Press an object once to select it. Press again to place in inventory

const Head = (props) => (
  <LinearGradient colors={['#151525', '#485563']} style={styles.header}>
    <View style={styles.leftHeader}>
      <Image source={pause} style={styles.pause}/>
      <Text style={styles.headerText}>Points</Text>
      <Text style={styles.headerText}>Timer</Text>
    </View>

    <Text style={styles.headerText}>Day One</Text>

    <View style={styles.rightHeader}>
      <Text style={styles.headerText}>Manifest</Text>
      <Button title="Go back" onPress={() => props.nav.goBack()} />
    </View>
  </LinearGradient>
);

// when testing is done, change this filename to GAME
export default class TestScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      running: true,
    };
    this.gameEngine = null;
    // LogBox.ignoreAllLogs(true);
  }
 
  // updateHandler = ({ touches, screen, layout, time }) => {
  //   let move = touches.find(x => x.type === "move");
  //   if (move) {
  //     this.setState({
  //       x: this.state.x + move.delta.pageX,
  //       y: this.state.y + move.delta.pageY
  //     });
  //   }
  // };
  
  // don't think we need this down here.
  // {/* <StatusBar hidden={true} /> */}

  render() {
    return (
    // <ImageBackground source={backgroundImage} style={styles.container}>
      <View>
        <Head nav={this.props.navigation}/>
        <Image source={backgroundImage} style={styles.truck}/>
        {/* <GameEngine
            ref={ref => {this.gameEngine = ref}}
            style={styles.gameContainer}
            // entities={Entities()}
            running={this.state.running}>
    
              
          </GameEngine> */}
          <Image
            style={styles.stand}
            source={stand}
          />
      </View>

    // </ImageBackground>
    );
  }
}

 
AppRegistry.registerComponent("TestScreen", () => TestScreen);


// I suppose we'll use this array to store the game data?
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

// const Item = ({ item, onPress, style }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//   <Text style={styles.title}>{item.title}</Text>
//   </TouchableOpacity>
// );



// const TestScreen = ({ navigation }) => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         style={{ backgroundColor }}
//       />
//     );
//   };

//   return (
//   <SafeAreaView style={styles.container}>
//     <FlatList
//       ListHeaderComponent={Head}
//       data={DATA}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       extraData={selectedId}
//       style={styles.truck}
//     />
//     <Button title="Go back" onPress={() => navigation.goBack()} />
//   </SafeAreaView>
//   );
// };



// STYLES


// // Should have three sections: header, game, footer.

// // will refactor later!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    // resizeMode: "cover",
    // justifyContent: "center"
    // position: "absolute"
    // backgroundColor: '#000',
  },
  gameContainer: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  // header stuff
  header: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    width: WIDTH,
    height: 38, // ADJUST THIS FOR HEADER HEIGHT
    borderBottomWidth: 2,
    borderBottomColor: 'red'
  },
  leftHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#000000",
  },
  pause: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: "contain",
  },
  rightHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  headerText: {
    color: "white",
    fontSize: 28,
    borderWidth: 1,
    borderColor: "#000000"
  },
  truck: {
    zIndex: -1,
    // flex: 1,
    // position: 'relative',
    // paddingTop: 30,
    top: 20,
    resizeMode: "cover",
    width: WIDTH,
    height: HEIGHT,
    // flex: 1,
    // borderColor: 'green',
    // borderWidth: 1
  },
  stand: {
    // zIndex: 2,
    // transform: [{ scale: 0 }], // CALL TRANSFORM SCALE 0 TO REMOVE AN ITEM!
    position: 'absolute',
    // height: HEIGHT / 1.45,
    width: 27,
    top: 80,
    left: 160,
    resizeMode: "contain"
    // aspectRatio: 1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

// export default TestScreen;