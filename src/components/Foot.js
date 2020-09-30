/* eslint-disable no-unused-vars */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Inventory from '../components/Inventory';

const walkieTalkie = require('../assets/walkieTalkie2.png');

// PROPS REQUIRED FROM STATE (declared in Game.js):
// inventory (array of objects)
// truckInventory (array of objects)
// thirdSlot (boolean) and fourthSlot (boolean)
// styles

// ------------------- CURRENTLY WORKING ON: ---------------------- //
// disputeItems() ~line 164

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
// TO IMPLEMENT: all css animations.
const pressInventory = (self, inventoryIndex = 0) => {
  self.setState((state) => {
    const item = state.inventory[inventoryIndex];
    if (item.name === 'EMPTYSLOT' || item.correctlySent) {
      return ({});
    } else {
      if (item.isSelected) {
        item.isSelected = false;
        state.truckInventory[item.truckIndex] = item;
        state.inventory[inventoryIndex] = {name: 'EMPTYSLOT'};
        // unhighlight inventory slot - set css?
      } else {
        item.isSelected = true;
        // highlight inventory slot - set css?
      }
      return ({
        inventory: state.inventory,
        truckInventory: state.truckInventory,
      });
    }
  });
};


// TO IMPLEMENT: finish updatePoints, sendInstructions, animations.
const sendItems = (props) => {
  // Uses props.numSlots, props.inventory, and currentInstructions.
  // On press, sends items and gives you points.
  const items = instructions[currentInstructionIndex].itemsNeeded;
  let pointsAccrued = 0;
  let pointsDeducted = 0;
  let numSent = 0;

  for (const key in items) {
    if (!{}.hasOwnProperty.call(items, key)) {
      return 'ERROR';
    } else {
      const item = items[key];
      for (let i = 0; i < props.numSlots; i++) {
        const invenItem = props.inventory[i];

        // this is a temporary case. remove when properly implemented.
        if (invenItem.name === 'EMPTYSLOT') {
          return 'ERROR THIS IS A REMINDER TO IMPLEMENT NO-SENDING IF INVENTORY ISN\'T FULL.';
        }

        if (invenItem.wasSent) {
          // if inventory item has been sent already, SKIP.
          numSent++;
          continue;
        } else if (invenItem.name === key || item.altItems[invenItem.name]) {
          // pass cases

          // if item has already been received, deduct points.
          if (item.itemReceived) {
            pointsDeducted -= 100;
            // flash slot red.
          } else {
            // If it hasn't been received, set flag to true and style green.

            // I THINK WE MAY NEED TO USE SETSTATE FOR THESE TWO FLAGS.
            item.itemReceived = true;
            invenItem.wasSent = true;

            numSent++;
            // IMPLEMENT style slot green + checkmark.

            // extra points if you sent the alternative.
            invenItem.name === key ? pointsAccrued += 300 : pointsAccrued += 500;
          }
        } else {
          // fail cases
          pointsDeducted -= 100;
          // flash slot red.
        }
      }
    }
  }

  // Call below to update points and render animations.
  // updatePoints(pointsAccrued, pointsDeducted);

  // if (numSent === props.numSlots) {
  //   currentInstructionIndex++;
  //   // render 'good job' flavor text. happy radio sounds.
  //   renderRadioText('HAPPY FLAVOR TEXT', 'happy');
  //   // some sort of delay.....
  //   sendInstructions('happy');
  //
  // } else {
  //   // unhappy sounds. angry flavor text. angry radio sounds.
  //   renderRadioText('ANGRY FLAVOR TEXT', 'angry');
  //   // some sort of delay...
  //   sendInstructions('angry');
  // }
};

const disputeItems = () => {
  // When pressed, should add a dispute icon to the inventory.
  // "Be warned! If you get three disputes wrong, you're fired!!!"
};

// ------------------- HELPER FUNCTIONS ---------------------- //

// TO IMPLEMENT: all animations, sounds, state changes.
const updatePoints = (pointsAccrued, pointsDeducted) => {
  // Used in sendItems.
  // renders green/red text flashes with point values, total points changing. updates state.

  const pointChange = pointsAccrued + pointsDeducted;
  if (pointsAccrued > 0) {
    // play $$$ sound and render green text
  }
  if (pointsDeducted < 0) {
    // play sad sound and render red text. NOTE: happy/sad can play simultaneously!
  }

  // setState: {points = state.points + pointChange}
  // render the change in points... somehow.
};

// TO IMPLEMENT: renderRadioText(), audio, animations.
const sendInstructions = (mood = 'neutral') => {
  // Called on-press by radio, or by sendItems.
  // Calls renderRadioText() to re-render text, audio, animations.

  const currentInstructions = instructions[currentInstructionIndex];
  const text = currentInstructions.text;
  renderRadioText(text, mood);
};

// TO IMPLEMENT: literally all of it lol.
const renderRadioText = (text, mood = 'neutral') => {
  // Given text, renders. Animations differ based on mood.
  // called by sendInstructions, and should also be called for any flavor text you want to add.

  // i.e. if 'happy', play happy audio. if 'neutral', play neutral audio.
  // for both of these, same radio animations.
  // if 'angry', play angry audio and animate the radio and text bubble angrily.
  return `NOT DONE YET. But here's the text: ${text}`;
};

// ------------------- ACTUAL FOOT CODE ---------------------- //

// TO IMPLEMENT: Figure out how you want to pass functions down as props.
// Instructions rendering and functions
// Radio on-click
const Foot = (props) => (
  <View style={props.styles.footer}>

    {/* Inventory (DONE EXCEPT FOR pressInventory) */}
    <View style={props.styles.leftFooter}>
      <Inventory
        styles={props.styles}
        inventory={props.inventory}
        pressInventory={props.pressInventory}
        numSlots={props.numSlots}
      />
    </View>


    {/* Instructions (NOT DONE.)
      Should scroll instructions while walkie animation plays, then derender.
      instructions should prolly be an array/object of all possible instructions.
    */}
    <Text style={props.styles.instructions}>{props.instructions[0]}</Text>


    {/* Send Functions (NOT DONE.) */}
    <View style={props.styles.rightFooter}>
      {/* this View contains Walkie Talkie render and the Send Buttons */}

      <Image
        // this is a STATIC thing so I think we don't need to make a component?
        source={walkieTalkie}
        style={props.styles.walkieTalkie}
        // We need an onPress event handler which replays instructions
        onPress={props.pressWalkie}
        // This should also trigger some CSS animation - vibration? etc.
        // Or it'll reveal an image of the walkietalkie with static or something...
      />
      <View style={props.styles.sendButtons}>
        <TouchableOpacity
          style={props.styles.yesButton} // write this style!
          onPress={props.sendItems} // write this event handler
          // also write buttonText style.
        >
          <Text style={props.styles.buttonText}>Send!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={props.styles.noButton} // write this style
          onPress={props.disputeItems} // write this event handler
        >
          <Text style={props.styles.buttonNo}>Dispute!</Text>
        </TouchableOpacity>

      </View>
    </View>
  </View>
);

export default Foot;
