import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Inventory from '../components/Inventory';

const walkieTalkie = require('../assets/walkieTalkie2.png');

// PROPS REQUIRED FROM STATE (declared in Game.js):
// inventory (array of objects)
// truckInventory (array of objects)
// thirdSlot (boolean) and fourthSlot (boolean)
// styles

// instructions
// format: array of instruction objects. each instruction object contains text, validItems, other??
//  [
//    {
//      text: 'asking for stand and lights',
//      itemsNeeded: {
//        stand: {validItems: {stand: true, bigStand: true}, itemReceived: null},
//        lights: {validItems: {smallLights: true, bigLights: true}, itemReceived: null},
//      }
//    },
//    {repeat for other instructions},
//  ]

// Inventory format:
// let inventory = [{name: 'stand', url: 'url', isSelected: false, truckIndex: 1}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}]
//   optional props: truckdisplay: true, inventoryUrl: 'url'

// let truckInventory = [{name: 'large light', url: 'url', isSelected: false, truckIndex: 0}, {name: 'EMPTYSLOT'}, {name: 'EMPTYSLOT'}]

// EVENT HANDLERS

// Sets an item's isSelected property to true
// OR moves it from inventory back to truck and sets it to false.
// css animations NOT IMPLEMENTED.
const pressInventory = (self, inventoryIndex = 0) => {
  // CONSIDER: adding an inventoryUrl property and a truckDisplay property
  // inventoryUrl for a properly formatted asset that doesn't need styling
  // truckDisplay to hide an item instead of removing it. This changes it to a display toggle!
  self.setState((state) => {
    const item = state.inventory[inventoryIndex];
    if (item.name === 'EMPTYSLOT') {
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

// pressWalkie (event handler)
//   Plays a walkie talkie animation, then replays the instructions

// sendItems (event handler)
// VERY COMPLEX LOGIC. FIGURE THIS OUT!!!
//   iterate over # of inventory slots (let i = 0; i < 2 OR 3 OR 4; i++),
//     for each item in inventory,
//      if item name is EMPTYSLOT, skip.
//       for each itemNeeded in instructions[relevantidx].itemsNeeded,
//         check if itemNeeded[inventory[i].name] === true
//          if so, check if itemNeeded.itemReceived is true
//            if true, SKIP this iteration.
//            else, set true and remove item from inventory and DON'T re-add to truck.
//                then, run points function to add points.
//       at the end of iteration, (if i = upperBound), if either itemReceived is false,
//       re-add items to truck and remove from inventory, deducting points.
// when do we deduct points?
// if EITHER inventory item doesn't match.
// eventually when both itemReceived things are true, set flag to get new instructions

const Foot = (props) => (
  <View style={props.styles.footer}>

    {/* Inventory (DONE EXCEPT FOR pressInventory) */}
    <View style={props.styles.leftFooter}>
      <Inventory
        styles={props.styles}
        inventory={props.inventory}
        pressInventory={props.pressInventory}
        thirdSlot={props.thirdSlot}
        fourthSlot={props.fourthSlot}
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
          onPress={props.denyItems} // write this event handler
        >
          <Text style={props.styles.buttonNo}>Don&apos;t!</Text>
        </TouchableOpacity>

      </View>
    </View>
  </View>
);

export default Foot;
