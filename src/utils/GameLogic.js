// ------------------- GAME LOGIC ---------------------- //
// Object which contains all functions called within Game.


const GameLogic = {
  // ------------------- EVENT HANDLERS ---------------------- //


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
  sendItems: (state, self) => {
    // Uses props.numSlots, props.inventory, and currentInstructions.
    // On press, sends items and gives you points.
    const items = state.instructions[self.state.currentInstructionIndex].itemsNeeded;
    let pointsAccrued = 0;
    let pointsDeducted = 0;
    let numSent = 0;

    for (let i = 0; i < state.numSlots; i++) {
      // For each inventory slot, accrue or deduct points if inventory item matches
      // one of the specified items in the instructions

      const invenItem = state.inventory[i];
      let itemCorrect = false;
      let extraPoints = false;

      if (invenItem.name === 'EMPTYSLOT') {
        return 'ERROR, REMINDER TO IMPLEMENT NO-SEND IF INVENTORY IS NOT FULL.';
      }

      if (invenItem.wasSent) {
        // Skip inventory slot if it's already been sent.
        numSent++;
        continue;
      } else {
        for (const key in items) {
          if (!{}.hasOwnProperty.call(items, key)) {
            return 'ERROR, key does not exist.';
          } else {
            const item = items[key];

            if ((invenItem.name === key || item.altItems[invenItem.name]) && !item.itemReceived) {
              // pass cases!
              // maybe change itemReceived logic to account for sending items where altItem and key overlap.

              numSent++;
              item.itemReceived = true;
              invenItem.wasSent = true;
              itemCorrect = true;
              // Extra points if you sent altItem
              invenItem.name === key ? extraPoints = true : extraPoints = false;

              // IMPLEMENT style slot green + checkmark

              // Update state to save flags.
              self.setState(() => ({instructions: state.instructions, inventory: state.inventory}));
            } else {
              // fail cases. FILL IN MORE LATER IF YOU WANT TO CHANGE LOGIC.
              itemCorrect = false;
            }
            // Deduct or accrue points based on flags set.
            !itemCorrect ? pointsDeducted -= 100 : (extraPoints ? pointsAccrued += 500 : pointsAccrued += 300);
          }
        }
      }
    }

    // Call below to update points and render animations.
    GameLogic.updatePoints(pointsAccrued, pointsDeducted, self);

    if (numSent === state.numSlots) {
      state.currentInstructionIndex += 1;
      self.setState((state) => ({currentInstructionIndex: state.currentInstructionIndex}));

      // self.setState((state) => ({currentInstructionIndex: state.currentInstructionIndex + 1}));
      // ^^^why didn't this work? State didn't update immediately when I called
      // self.state.currentInstructionIndex a few lines later.

      // render 'good job' flavor text. happy radio sounds.
      GameLogic.renderRadioText('HAPPY FLAVOR TEXT', 'happy', self);
      // some sort of delay.....
      GameLogic.sendInstructions('happy', state.currentInstructionIndex, self);
    } else {
      // unhappy sounds. angry flavor text. angry radio sounds.
      GameLogic.renderRadioText('ANGRY FLAVOR TEXT', 'angry', self);
      // some sort of delay...
      GameLogic.sendInstructions('angry', state.currentInstructionIndex, self);
    }
  },


  // ------------------- HELPER FUNCTIONS ---------------------- //

  // TO IMPLEMENT: renderRadioText(), audio, animations.
  sendInstructions: (mood = 'neutral', index, self) => {
    // Called on-press by radio, or by sendItems.
    // Calls renderRadioText() to re-render text, audio, animations.
    const currentInstructions = self.state.instructions[index];
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
