import React from 'react';
import {View, Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const truck = require('../assets/GripTruck.png');

const Truck1 = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  return (
    <View
      style={[
        {
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: props.color || 'pink',
        },
      ]}>
      <Image
        style={{width: width, height: height}}
        source={truck}
        resizeMode="stretch"
      />
    </View>
  );
}

export default (world, color, pos, size) => {
  const background = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {isStatic: true, friction: 1},
  );
  Matter.World.add(world, [background]);

  return {
    body: background,
    size: [size.width, size.height],
    color: color,
    renderer: <Truck1 />,
  };
};

Truck1.propTypes = {
  size: array,
  body: object,
  color: string,
};