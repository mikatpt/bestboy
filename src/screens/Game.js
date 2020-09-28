/* eslint-disable no-unused-vars */
import React from 'react';
import {GameEngine, GameLoop} from 'react-native-game-engine';
import {View} from 'react-native';
import Head from '../components/Head';
import Foot from '../components/Foot';
import styles from '../utils/Styles';

// DEBUGGING QUESTIONS:
// Should I add props to this.state? For instance, in this file,
// navigation is passed in as this.props.navigation - should I instead add to state,
// {navigation: this.props.navigation} ?


// PROPS REQUIRED FROM STATE (I guess this is declared from the campaign menu (level select)):
// thirdSlot and fourthSlot (boolean)
// navigation
// ADD TO THIS


export default class Game extends React.Component {
  // will we need props? Instantiating now just in case.
  constructor(props) {
    super(props);
    this.state = {
      // This may not actually be where we need to instantiate these things?
      // Perhaps we also will need to pass state in:
      // i.e. inventory: this.props.inventory
      // we'll cross that bridge when we get to it.

      // inventory item format:
      // {name: 'stand', url: '../assets/stand.png', isSelected: false, truckIndex: 5, OTHER PROPS}
      inventory: [
        {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'},
      ],
      truckInventory: [],
      styles: styles,
    };
  };

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
          styles={this.styles}
          inventory={this.inventory}
          pressInventory={this.pressInventory} // check your notes on how to bind 'this' to an eventHandler properly!
          thirdSlot={this.props.thirdSlot}
          fourthSlot={this.props.fourthSlot}

        />
      </View>
    );
  }
}

// styles={this.props.styles}
// inventory={this.props.inventory}
// pressInventory={this.props.pressInventory}
// thirdSlot={this.props.thirdSlot}
// fourthSlot={this.props.fourthSlot}
