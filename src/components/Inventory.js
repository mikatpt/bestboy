import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

// THINGS TO DEBUG:
// Within Slot:
//   onPress should:
//     highlight the View container.
//
//   CONSIDER changing Slot's image source to props.contents.inventoryUrl.
//     basically, we need to figure out if inventory assets are worth the work.
//   Also write the inventoryImg style.


// An inventory slot. Doesn't render if shouldRender is false.
const Slot = (props) => {
  // props: contents, style, onPress, and shouldRender
  if (!props.shouldRender) {
    return null;
  }
  return (
    <TouchableOpacity onPress={props.pressInventory} style={props.styles.inventory}>
      {props.contents.name !== 'EMPTYSLOT' ?
      <Image source={props.contents.url} style={props.styles.inventoryImg} /> : null
      }
    </TouchableOpacity>
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
        pressInventory={() => pI(0)}
        styles={s}
        shouldRender={true}
      />
      <Slot
        contents={i[1]}
        pressInventory={() => pI(1)}
        styles={s}
        shouldRender={true}
      />
      <Slot
        contents={i[2]}
        pressInventory={() => pI(2)}
        styles={s}
        shouldRender={props.numSlots >= 3 ? true : false}
      />
      <Slot
        contents={i[3]}
        pressInventory={() => pI(3)}
        styles={s}
        shouldRender={props.numSlots === 4 ? true : false}
      />
    </View>
  );
};

export default Inventory;
