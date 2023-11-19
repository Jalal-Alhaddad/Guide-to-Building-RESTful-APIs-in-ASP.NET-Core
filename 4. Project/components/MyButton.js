import * as React from 'react';
import { Pressable, Text } from 'react-native';
import Styles from '../styles/MainStyle';

/*
    <MyButton
      text="Text"
      type="default*|major|minor"
      size="small|medium*|large"
      onPress={function}
      buttonStyle={customStyle}
      textStyle={customStyle}
      flex=1,2,3
      v_margin=5,10
      h_margin=5.10
      radius=5
    />
 */

export function MyButton(props) {
  // Determine button styling
  let buttonStyling = [Styles.button, props.style];
  let textStyling = [Styles.buttonText];

  if (props.flex) {
    buttonStyling.push({ flex: props.flex });
  }

  if (props.v_margin) {
    buttonStyling.push({ marginVertical: parseInt(props.v_margin) });
  }

  if (props.h_margin) {
    buttonStyling.push({ marginHorizontal: parseInt(props.h_margin) });
  }

  if (props.radius) {
    buttonStyling.push({ borderRadius: parseInt(props.radius) });
  }

  switch (props.type) {
    case 'major':
      buttonStyling.push(Styles.buttonMajor);
      textStyling.push(Styles.buttonMajorText);
      break;
    case 'minor':
      buttonStyling.push(Styles.buttonMinor);
      textStyling.push(Styles.buttonMinorText);
      break;
  }

  switch (props.size) {
    case 'large':
      buttonStyling.push(Styles.buttonLarge);
      textStyling.push(Styles.buttonLargeText);
      break;
    case 'small':
      buttonStyling.push(Styles.buttonSmall);
      textStyling.push(Styles.buttonSmallText);
      break;
  }

  buttonStyling.push(props.buttonStyle);
  textStyling.push(props.textStyle);

  return (
    <Pressable onPress={props.onPress} style={buttonStyling}>
      <Text style={textStyling}>{props.text}</Text>
    </Pressable>
  );
}
