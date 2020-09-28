import React from 'react';
import {Image, Text, View} from 'react-native';

const walkieTalkie = require('../assets/walkieTalkie2.png');

//       <Image source={pause} style={props.styles.pause}/>

// Check later to see if this.props should actually just be props
export default class Foot extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={this.props.styles.footer}>
        <View style={this.props.styles.leftFooter}>
          <View style={this.props.styles.inventory1}>
            <Text>Slot1</Text>
          </View>
          <View style={this.props.styles.inventory2}>
            <Text>Slot2</Text>
          </View>
        </View>

        <Text style={this.props.styles.instructions}>Instructions</Text>

        <View style={this.props.styles.rightFooter}>
          <Image source={walkieTalkie} style={this.props.styles.walkieTalkie} />
          <View style={this.props.styles.sendButtons}>
            <Text style={this.props.styles.buttonYes}>Send!</Text>
            <Text style={this.props.styles.buttonNo}>Don&apos;t!</Text>
          </View>
        </View>
      </View>
    );
  }
}

// change buttons to touchableopacity!!
