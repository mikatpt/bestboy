/* eslint-disable no-unused-vars */
import React from 'react';
import {GameEngine, GameLoop} from 'react-native-game-engine';
import {View} from 'react-native';
import Head from '../components/Head';
import Foot from '../components/Foot';
import Styles from '../utils/Styles';


export default class Game extends React.Component {
  // will we need props? Instantiating now just in case.
  constructor(props) {
    super(props);
    this.state = {
      // This may not actually be where we need to instantiate these things?
      // Perhaps we also will need to pass state in:
      // i.e. inventory: this.props.inventory
      // we'll cross that bridge when we get to it.
      inventory: [
        'placeholder1',
        'placeholder2',
        {name: 'placeholder3', ref: 'url', type: 'itemType'}, // type controls alt valid items?
      ],
      truckInventory: [],
    };
  };

  render() {
    return (
      <View>
        <Head nav={this.props.navigation} styles={styles} />
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.running}>


        </GameEngine>
        <Foot nav={this.props.navigation} styles={styles} />
      </View>
    );
  }
}
