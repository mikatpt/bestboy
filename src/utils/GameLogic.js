// ------------------- GAME LOGIC ---------------------- //
// Object which contains all functions called within Game.


const GameLogic = {
  // On press, sets an item's isSelected property to true, OR
  // moves it from inventory back to truck and sets it to false.
  // TO IMPLEMENT: all css animations, disputes.
  pressInventory: (inventoryIndex = 0, self) => {
    self.setState((state) => {
      const item = state.inventory[inventoryIndex];
      if (item.name === 'EMPTYSLOT' || item.correctlySent) {
        return ({});
      } else {
        if (item.isSelected) {
          item.isSelected = false;

          if (item.name === 'DISPUTE') {
            // Dispute items should be rendered by quantity property.
            state.disputes.quantity++;
          } else {
            state.truckInventory[item.truckIndex] = item;
          }

          state.inventory[inventoryIndex] = {name: 'EMPTYSLOT'};
          // unhighlight inventory slot - set css?
        } else {
          item.isSelected = true;
          // highlight inventory slot - set css?
        }
        return ({
          inventory: state.inventory,
          truckInventory: state.truckInventory,
          disputes: state.disputes,
        });
      }
    });
  },

  // TO IMPLEMENT: finish updatePoints, sendInstructions, animations.
  sendItems: (props, self) => {
    // Uses props.numSlots, props.inventory, and currentInstructions.
    // On press, sends items and gives you points.
    const items = props.instructions[currentInstructionIndex].itemsNeeded;
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
              item.itemReceived = true;
              invenItem.wasSent = true;

              // update state to save the above flags.
              self.setState(() => ({instructions: props.instructions, inventory: props.inventory}));

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
    GameLogic.updatePoints(pointsAccrued, pointsDeducted, self);

    if (numSent === props.numSlots) {
      currentInstructionIndex++;
      // render 'good job' flavor text. happy radio sounds.
      GameLogic.renderRadioText('HAPPY FLAVOR TEXT', 'happy', self);
      // some sort of delay.....
      GameLogic.sendInstructions('happy', self);
    } else {
      // unhappy sounds. angry flavor text. angry radio sounds.
      GameLogic.renderRadioText('ANGRY FLAVOR TEXT', 'angry', self);
      // some sort of delay...
      GameLogic.sendInstructions('angry', self);
    }
  },


  // ------------------- HELPER FUNCTIONS ---------------------- //

  // TO IMPLEMENT: renderRadioText(), audio, animations.
  sendInstructions: (mood = 'neutral', index, self) => {
    // Called on-press by radio, or by sendItems.
    // Calls renderRadioText() to re-render text, audio, animations.
    const currentInstructions = instructions[index];
    const text = currentInstructions.text;
    GameLogic.renderRadioText(text, mood, self);
  },

  // TO IMPLEMENT: literally all of it lol.
  renderRadioText: (text, mood = 'neutral', self) => {
    // Given text, renders. Animations differ based on mood.
    // called by sendInstructions, and should also be called for any flavor text you want to add.

    // Sets currentText state, which controls footer text.
    self.setState(() => ({currentText: text}));

    // call or write a function which re-triggers text animation.
    // i.e. if 'happy', play happy audio. if 'neutral', play neutral audio.
    // for both of these, same radio animations.
    // if 'angry', play angry audio and animate the radio and text bubble angrily.
    return `NOT DONE YET. But here's the text: ${text}`;
  },

  // TO IMPLEMENT: all animations, sounds, state changes.
  updatePoints: (pointsAccrued, pointsDeducted, self) => {
    // Used in sendItems.
    // renders green/red text flashes with point values, total points changing. updates state.

    const pointChange = pointsAccrued + pointsDeducted;
    if (pointsAccrued > 0) {
    // play $$$ sound and render green text
    }
    if (pointsDeducted < 0) {
    // play sad sound and render red text. NOTE: happy/sad can play simultaneously!
    }
    self.setState((state) => ({points: state.points + pointChange}));
    // setState: {points = state.points + pointChange}
    // render the change in points... somehow.
  },
};

export default GameLogic;
