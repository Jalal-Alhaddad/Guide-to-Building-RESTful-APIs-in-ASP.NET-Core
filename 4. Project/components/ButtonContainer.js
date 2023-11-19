import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/MainStyle';

export function ButtonContainer({ children, direction }) {
  const containerStyle = direction === 'column' ? Styles.buttonContainerVertical : direction === 'row-reverse' ? Styles.buttonContainerRowReverse : Styles.buttonContainerHorizontal;

  return <View style={containerStyle}>{children}</View>;
}

export function DataContainer({ children, direction }) {
  const containerStyle = direction === 'column' ? Styles.dataContainerVertical : direction === 'row-reverse' ? Styles.dataContainerRowReverse : Styles.dataContainerHorizontal;

  return <View style={containerStyle}>{children}</View>;
}