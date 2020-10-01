import {StyleSheet, Dimensions} from 'react-native';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    // resizeMode: "cover",
    // justifyContent: "center"
    // position: "absolute"
    // backgroundColor: '#000',
  },
  gameContainer: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  // header stuff
  header: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: WIDTH,
    height: 38, // ADJUST THIS FOR HEADER HEIGHT
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  leftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#000000',
  },
  pause: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
  },
  rightHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    borderWidth: 1,
    borderColor: '#000000',
  },

  // Footer stuff
  footer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: "gray",
    width: WIDTH,
    // height: 38, // ADJUST THIS FOR FOOTER HEIGHT
    // borderTopWidth: 2,
    // borderTopColor: 'red'
  },
  leftFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#000000',
    height: 50,
  },

  inventory: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 4,
  },
  inventory1: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 4,
    borderRightWidth: 0,
    marginLeft: 40,
  },
  inventory2: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 4,
  },
  inventoryImg: {
    height: 49,
    width: 49,
  },
  rightFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', // prolly need to adjust this for walkie buttons
    // height: 150,
    borderWidth: 1,
    borderColor: '#000000',
  },
  instructions: {
    color: 'white',
    fontSize: 28,
    borderWidth: 1,
    borderColor: '#000000',
    maxWidth: WIDTH / 2,
  },
  walkieTalkie: {
    resizeMode: 'contain',
    height: 90,
    maxWidth: 60,
  },
  sendButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderColor: 'green',
    borderWidth: 2,
    maxWidth: 80, // works but crap solution? flex-box wasn't working properly.
  },
  buttonYes: {
    backgroundColor: 'green',
    fontSize: 28,
    color: 'white',
  },
  buttonNo: {
    backgroundColor: 'red',
    fontSize: 28,
    color: 'white',
  },
  truck: {
    zIndex: -1,
    // flex: 1,
    // position: 'relative',
    // paddingTop: 30,
    top: 20,
    resizeMode: 'cover',
    width: WIDTH,
    height: HEIGHT,
    // flex: 1,
    // borderColor: 'green',
    // borderWidth: 1
  },
  stand: {
    // zIndex: 2,
    // transform: [{ scale: 0 }], // CALL TRANSFORM SCALE 0 TO REMOVE AN ITEM!
    position: 'absolute',
    // height: HEIGHT / 1.45,
    width: 27,
    top: 80,
    left: 160,
    resizeMode: 'contain',
    // aspectRatio: 1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
