/* eslint-disable no-unused-vars */
import React from 'react';
import {GameEngine, GameLoop} from 'react-native-game-engine';
import {View} from 'react-native';

import GameLogic from '../utils/GameLogic'; // call GameLogic.functionName
import Head from '../components/Head';
import Foot from '../components/Foot';
import styles from '../utils/Styles';

// DEBUGGING QUESTIONS:
// Should I add props to this.state? For instance, in this file,
// navigation is passed in as this.props.navigation - should I instead add to state,
// {navigation: this.props.navigation} ?


// PROPS REQUIRED FROM STATE (I guess this is declared from the campaign menu (level select)):
// numSlots
// navigation
// instructions (from a set);
// ADD TO THIS


// can I do this? It seems extra to declare this in state.
// eslint-disable-next-line prefer-const
let currentInstructionIndex = 0;

export default class Game extends React.Component {
  // will we need props? Instantiating now just in case.
  constructor(props) {
    super(props);
    this.state = {
      // This is probably where we need to instantiate gamestate. Based on the level information
      // inherited through props, we set state based on raw game data.

      // Perhaps we also will need to pass state in:
      // i.e. inventory: this.props.inventory
      // we'll cross that bridge when we get to it.

      // inventory item format:
      // {name: 'stand', url: '../assets/stand.png', isSelected: false, truckIndex: 5, OTHER PROPS}
      // currentInstructionIndex: 0,
      currentText: 'placeholder',

      // if disputes hits 0, you should fail the level and be fired.
      disputes: {name: 'DISPUTE', url: 'url', isSelected: false, quantity: 3},
      instructions: [ // REPLACE THIS. pass in prop.instructions, and shuffle it somehow.
        {
          text: 'asking for stand and small lights!',
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
        {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'},
      ],
      numSlots: 2, // set using props.numSlots from level select.
      points: 0,
      truckInventory: [], // replace with props.truckInventory.
      styles: styles,
    };
    this.pressInventory = this.pressInventory.bind(this);
    this.renderRadioText = this.renderRadioText.bind(this);
    this.sendInstructions = this.sendInstructions.bind(this);
    this.sendItems = this.sendItems.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
  };

  // On press, sets an item's isSelected property to true, OR
  // moves it from inventory back to truck and sets it to false.
  // TO IMPLEMENT: all css animations, disputes.
  pressInventory(inventoryIndex = 0) {
    GameLogic.pressInventory(inventoryIndex, this);
  };
  sendItems() {
    GameLogic.sendItems(this.props, this);
  }
  renderRadioText(text, mood = 'neutral') {
    GameLogic.renderRadioText(text, mood, this);
  };
  sendInstructions(mood = 'neutral', currentInstructionIndex) {
    GameLogic.sendInstructions(mood, currentInstructionIndex, this);
  };
  updatePoints(pointsAccrued = 0, pointsDeducted = 0) {
    GameLogic.updatePoints(pointsAccrued, pointsDeducted, this);
  }

  render() {
    return (
      <View>
        <Head nav={this.props.navigation} styles={this.styles} />
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={this.styles.gameContainer}
          running={this.state.running}>

        </GameEngine>

        <Foot
          inventory={this.inventory}
          numSlots={this.props.numSlots}
          styles={this.styles}
          pressInventory={this.pressInventory}
          renderRadioText={this.renderRadioText} // might not need to pass this.
          sendInstructions={this.sendInstructions}
          sendItems={this.sendItems}
        />
      </View>
    );
  }
}
