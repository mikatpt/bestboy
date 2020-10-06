import React from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
// import styles from '../utils/Styles.js';
import GameLogic from '../utils/GameLogic'; // call gameLogic.functionName
import TypeWriter from 'react-native-typewriter';


const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 14,
  },
});

// Currently implementing Instructions


// ------------------- EVENT HANDLERS ---------------------- //

// Eventually, we'll take all these and place them in a single GameLogic file.


// On press, sets an item's isSelected property to true, OR
// moves it from inventory back to truck and sets it to false.
// TO IMPLEMENT: all css animations, disputes.
// pressInventory() MOVED TO GAMELOGIC.JS


// TO IMPLEMENT: finish updatePoints, sendInstructions, animations.
// sendItems() MOVED TO GAMELOGIC.JS


// ------------------- HELPER FUNCTIONS ---------------------- //

// TO IMPLEMENT: all animations, sounds, state changes.
// updatePoints() MOVED TO GAMELOGIC.JS

// TO IMPLEMENT: renderRadioText(), audio, animations.
// sendInstructions() MOVED TO GAMELOGIC.JS

// TO IMPLEMENT: literally all of it lol.
// renderRadioText() MOVED TO GAMELOGIC.JS

// TO IMPLEMENT: Typewriter SOUNDS!
// Edit node_modules/react-native-typewriter file and add a sound.
// https://www.npmjs.com/package/react-native-typewriter


const delayMap = [
  // If alphanumeric or empty space
  {at: /[\w\s]/i, delay: -100},
  // increase delay by 400ms following every '.' character
  {at: ',', delay: 70},
  // decrease delay by 200ms following every '!' character
  {at: /[!.]/, delay: 100},
];

export default class TestStuff extends React.Component {
  constructor(props) {
    super(props);
    // i = [{ name: 'stand', url: 'url', isSelected: true, truckIndex: 1 }, {name: 'EMPTYSLOT'}]
    // tI = [{ name: 'large light', url: 'url', isSelected: false, truckIndex: 0}, { name: 'EMPTYSLOT' }]
    this.state = {
      currentInstructionIndex: 0,
      currentText: 'placeholder',

      // if disputes hits 0, you should fail the level and be fired.
      disputes: {name: 'DISPUTE', url: 'url', isSelected: false, quantity: 3},
      instructions: [ // REPLACE THIS. pass in prop.instructions, and shuffle it somehow.
        {
          text: 'Asking for stand, and small lights! Make it quick, scrub!',
          itemsNeeded: {
            'stand': {altItems: {'bigStand': true}, itemReceived: false, itemExists: true},
            'smallLights': {altItems: {'bigLights': true}, itemReceived: false, itemExists: true},
          },
        },
        {
          text: 'I need rope and a harness, stat!!!',
          itemsNeeded: {
            'rope': {altItems: {'rope': true}, itemReceived: false, itemExists: true},
            'harness': {altItems: {'harness': true}, itemReceived: false, itemExists: true},
          },
        },
      ],
      inventory: [ // replace with props.inventory? Might not need to with this one.
        {name: 'bigLights', url: 'url', isSelected: false, truckIndex: 0, wasSent: false}, {name: 'stand', url: 'url', isSelected: true, truckIndex: 1, wasSent: false}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'},
      ],
      numSlots: 2, // set using props.numSlots from level select.
      points: 0,
      truckInventory: [], // replace with props.truckInventory.
      testAnimation: new Animated.Value(0),
      showInstructions: true,
    };
    this.pressInventory = this.pressInventory.bind(this);
    this.renderRadioText = this.renderRadioText.bind(this);
    this.sendInstructions = this.sendInstructions.bind(this);
    this.sendItems = this.sendItems.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
    this.toggleInstructions = this.toggleInstructions.bind(this);
  }
  pressInventory(inventoryIndex = 0) {
    GameLogic.pressInventory(inventoryIndex, this);
  };
  sendItems() {
    GameLogic.sendItems(this.state, this);
  };
  sendInstructions(mood = 'neutral', index = this.state.currentInstructionIndex) {
    // If you press radio when text is showing, do nothing.
    this.state.showInstructions ? null : GameLogic.sendInstructions(mood, index, this);
  };
  renderRadioText(text, mood = 'neutral') {
    GameLogic.renderRadioText(text, mood, this);
  };
  updatePoints(pointsAccrued = 0, pointsDeducted = 0) {
    GameLogic.updatePoints(pointsAccrued, pointsDeducted, this);
  };
  toggleInstructions() {
    setTimeout(() => this.setState((state) => ({showInstructions: !state.showInstructions})), 4000);
  }
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    // this.pressInventory();
    // this.sendInstructions();
    // this.sendItems();
  }

  render() {
    return (
      <View>
        <Text style={styles.headerText}>Test Things!</Text>
        <View>
          <Button title='Press to send instructions!' style={{width: 'max-content'}} onPress={this.sendInstructions}></Button>
          <Button title='Press to send items!' style={{width: 'max-content'}} onPress={this.sendItems}></Button>
          <Text style={styles.headerText}>{'inventory: ' + JSON.stringify(this.state.inventory)}</Text>
          <Text style={styles.headerText}>{'truck inventory: ' + JSON.stringify(this.state.truckInventory)}</Text>
          {/* <Text style={styles.headerText}>{`instructions: ${this.state.currentText}`}</Text> */}
          <Text style={styles.headerText}>{`points: ${this.state.points}`}</Text>
          <Text style={styles.headerText}>{`current instruction index: ${this.state.currentInstructionIndex}`}</Text>
          {this.state.showInstructions && <TypeWriter typing={1} initialDelay={20} minDelay={20} maxDelay={120} delayMap={delayMap} onTypingEnd={this.toggleInstructions}>{`instructions: ${this.state.currentText}`}</TypeWriter>}
          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    );
  }
}

