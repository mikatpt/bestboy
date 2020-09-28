import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Inventory from '../components/Inventory';

const walkieTalkie = require('../assets/walkieTalkie2.png');

//       <Image source={pause} style={props.styles.pause}/>

// PROPS REQUIRED FROM STATE (declared in Game.js):
// inventory (array of objects)
// truckInventory (array of objects)
// thirdSlot (boolean) and fourthSlot (boolean)
// styles

// pressInventory (event handler)
//   Sets inventory[i].isSelected = true OR
//   Sets truckInventory[inventory[i].truckIndex] = inventory[i]
//   and then inventory[i] = {name: 'EMPTYSLOT'}

// pressWalkie (event Handler)
//   Plays a walkie talkie animation, then replays the instructions

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


// export default class Foot extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <View style={this.props.styles.footer}>
//         <View style={this.props.styles.leftFooter}>

//           <Inventory
//             styles={this.props.styles}
//             inventory={this.props.inventory}
//             pressInventory={this.props.pressInventory}
//             thirdSlot={this.props.thirdSlot}
//             fourthSlot={this.props.fourthSlot}
//           />

//         </View>

//         <Text style={this.props.styles.instructions}>{this.props.instructions[0]}</Text>
//         {/* instructions should be an array/object of all possible instructions?
//           that array/object item should relate to walkietalkie Send
//           This perhaps can just be <Text>...? */}

//         <View style={this.props.styles.rightFooter}>
//           {/* this View contains Walkie Talkie render and the Send Buttons */}

//           <Image
//             // this is a STATIC thing so I think we don't need to make a component?
//             source={walkieTalkie}
//             style={this.props.styles.walkieTalkie}
//             // We need an onPress event handler which replays instructions
//             onPress={this.props.pressWalkie}
//             // This should also trigger some CSS animation - vibration? etc.
//             // Or it'll reveal an image of the walkietalkie with static or something...
//           />
//           <View style={this.props.styles.sendButtons}>
//             <TouchableOpacity
//               style={this.props.styles.yesButton} // write this style!
//               onPress={this.props.sendItems} // write this event handler
//               // also write buttonText style.
//             >
//               <Text style={this.props.styles.buttonText}>Send!</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={this.props.styles.noButton} // write this style
//               onPress={this.props.denyItems} // write this event handler
//             >
//               <Text style={this.props.styles.buttonNo}>Don&apos;t!</Text>
//             </TouchableOpacity>

//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// change buttons to touchableopacity!!
