import React from 'react';
import {Image, View} from 'react-native';

// THINGS TO DEBUG:
// Within Slot, onPress should:
//   if props.contents.isSelected === false, set to true and highlight the View container.
// on select, pop-up with name.
// on double-tap, remove from inventory.


// PROPS PASSED DOWN FROM FOOT (state declared in Game.js):
// inventory (array of objects)
// pressInventory (event handler)
// thirdSlot (boolean) and fourthSlot (boolean)
// styles


const Slot = (props) => {
  // props: contents, style, onPress, and shouldRender
  // an item looks like this:
  // props.contents = {name: 'stand', url: '../assets/stand.png, isSelected: false, OTHER PROPERTIES}
  // an empty inventory item looks like this:
  // props.contents = {name: 'EMPTYSLOT'}

  // let isSelected = props.contents.isSelected;
  if (!props.shouldRender) {
    return null;
  }
  return (
    // <View style={props.style}>{props.contents}</View>
    <View onPress={'do something!'} style={props.styles.inventory}>
      {props.contents.name !== 'EMPTYSLOT' ?
      <Image source={props.contents.url} style={props.styles.inventoryImg} /> : null
      }
    </View>
  );
};

const Inventory = (props) => {
  const i = props.inventory;
  const s = props.styles;
  const pI = props.pressInventory;
  return (
    <View>
      <Slot
        contents={i[0]}
        onPress={pI}
        styles={s}
        shouldRender={true}
      />
      <Slot
        contents={i[1]}
        onPress={pI}
        styles={s}
        shouldRender={true}
      />
      <Slot
        contents={i[2]}
        onPress={pI}
        styles={s}
        shouldRender={props.thirdSlot}
      />
      <Slot
        contents={i[3]}
        onPress={pI}
        styles={s}
        shouldRender={props.fourthSlot}
      />
    </View>
  );
};

export default Inventory;
