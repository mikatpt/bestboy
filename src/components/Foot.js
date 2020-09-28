import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

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
          {/* this View contains INVENTORY SLOTS */}

          <Inventory
            style={this.props.styles.inventory1}
            contents={this.props.inventory[0]}
          />
          {/* we'll want to find a way to distribute items in inventory. */}
          {/* Inventory should instantiate with 2 slots as default and add slots as necessary. */}
          <Inventory
            style={this.props.styles.inventory2}
            contents={this.props.inventory[1]}
          />

        </View>

        <Instructions
          style={this.props.styles.instructions}
          contents={this.props.instructions[0]}
          // instructions should be an array/object of all possible instructions?
          // that array/object item should relate to walkietalkie Send
        />

        <View style={this.props.styles.rightFooter}>
          {/* this View contains Walkie Talkie render and the Send Buttons */}

          <Image
            // this is a STATIC thing so I think we don't need to make a component?
            source={walkieTalkie}
            style={this.props.styles.walkieTalkie}
            // We need an onPress event handler which replays instructions
            onPress={this.props.pressWalkie}
            // This should also trigger some CSS animation - vibration? etc.
            // Or it'll reveal an image of the walkietalkie with static or something...
          />
          <View style={this.props.styles.sendButtons}>
            <TouchableOpacity
              style={this.props.styles.yesButton} // write this style!
              onPress={this.props.sendItems} // write this event handler
              // also write buttonText style.
            >
              <Text style={this.props.styles.buttonText}>Send!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={this.props.styles.noButton} // write this style
              onPress={this.props.denyItems} // write this event handler
            >
              <Text style={this.props.styles.buttonNo}>Don&apos;t!</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

// change buttons to touchableopacity!!
