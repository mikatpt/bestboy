import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Button, Image, Text, View} from 'react-native';

const pause = require('../assets/pauseButton.png');


// Check if this.props works!
export default class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LinearGradient
        colors={['#151525', '#485563']}
        style={this.props.styles.header}>

        <View style={this.props.styles.leftHeader}>
          <Image source={pause} style={this.props.styles.pause}/>
          <Text style={this.props.styles.headerText}>Points</Text>
          <Text style={this.props.styles.headerText}>Timer</Text>
        </View>

        <Text style={this.props.styles.headerText}>Day One</Text>

        <View style={this.props.styles.rightHeader}>
          <Text style={this.props.styles.headerText}>Manifest</Text>
          <Button title="Go back" onPress={() => this.props.nav.goBack()} />
        </View>

      </LinearGradient>
    );
  }
}
