import React from 'react';
import { TouchableHighlight } from 'react-native';

export default function Button({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
