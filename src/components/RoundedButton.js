import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const RoundedButton = ({
  style = {},
  textStyle,
  size = 125,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth: 2,
      justifyContent: 'center',
    },
    text: {
      color: colors.white,
      fontSize: size / 3,
    },
  });
