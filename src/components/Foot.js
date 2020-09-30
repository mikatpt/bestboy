/* eslint-disable no-unused-vars */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Inventory from '../components/Inventory';

const walkieTalkie = require('../assets/walkieTalkie2.png');

// ------------------- CURRENTLY WORKING ON: ---------------------- //

/* // ------------------- DATA STRUCTURE FORMAT ---------------------- //


// Instructions format:

const instructions = [
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
      'harness': {altItems: {'harness': true}, itemReceived: false, itemExists: true}
    },
  },
]

// Inventory format:

const sampleInventory = [
  {name: 'stand', url: 'url', isSelected: true, truckIndex: 1, wasSent: false},
  {name: 'EMPTYSLOT'},
  {name: 'EMPTYSLOT'},
  {name: 'Optional props?', inventoryUrl: 'url'},

];

// Truck inventory format:

const truckInventory = [
  {name: 'large light', url: 'url', isSelected: false, truckIndex: 0},
  {name: 'EMPTYSLOT'},
  {name: 'EMPTYSLOT'},
  {name: 'DISPUTE', url: 'url', isSelected: false, }
];
*/

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

// ------------------- ACTUAL FOOT CODE ---------------------- //


// PROPS PASSED FROM STATE (declared in Game.js):
// inventory (array of objects)
// numSlots
// styles
// pressInventory
// renderRadioText (might not need to pass this.)
// sendInstructions

// TO IMPLEMENT: Figure out how you want to pass functions down as props.
// Instructions rendering and functions
// Radio on-click
const Foot = (props) => (
  <View style={props.styles.footer}>

    {/* DONE. */}
    <View style={props.styles.leftFooter}>
      <Inventory
        styles={props.styles}
        inventory={props.inventory}
        pressInventory={props.pressInventory} // properly pass this function as a prop!
        numSlots={props.numSlots}
      />
    </View>


    {/* Instructions (NOT DONE.)
      Should scroll instructions while walkie animation plays, then derender.
      instructions should prolly be an array/object of all possible instructions.
    */}
    <Text style={props.styles.instructions}>{props.currentText}</Text>


    {/* Send Functions (NOT DONE.) */}
    <View style={props.styles.rightFooter}>
      <Image
        // this is a STATIC thing so I think we don't need to make a component?
        source={walkieTalkie}
        style={props.styles.walkieTalkie}
        onPress={props.sendInstructions}
      />
      {/* removed View bc we're only using one button now. */}
      <TouchableOpacity
        style={props.styles.yesButton} // write this style!
        onPress={props.sendItems} // need to properly pass this function as a prop
      >
        <Text style={props.styles.buttonText}>Send!</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Foot;
