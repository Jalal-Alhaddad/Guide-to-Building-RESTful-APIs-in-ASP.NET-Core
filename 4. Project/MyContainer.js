import React from 'react';
import { View, StyleSheet } from 'react-native';
import Styles from '../styles/MainStyle';

export function MyContainer(props) {

  let containerStyle = [styles.container];

  switch (props.orientation) {
    case 'horizontal':
      containerStyle.push(styles.horizontalContainer);
      break;
    case 'vertical':
      containerStyle.push(styles.verticalContainer);
      break;
  }

    switch (props.model) {
      case 'full':
        containerStyle.push(styles.fullContainer);
        break;
    }

  return <View style={containerStyle}>{props.children}</View>;
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    // alignItems: "flex-start",
    // backgroundColor: 'red',
  },
  container: {
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 5,
    // margin: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  verticalContainer: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
