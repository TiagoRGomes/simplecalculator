import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#F69811',
  },
  equalButton: {
    color: '#fff',
    backgroundColor: '#FF5733',
  },
  clearButton: {
    color: '#fff',
    backgroundColor: '#118AF6',
    width: (Dimensions.get('window').width / 4) * 3,
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
});

export default props => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.clear) stylesButton.push(styles.clearButton);
  if (props.operation) stylesButton.push(styles.operationButton);
  if (props.equal) stylesButton.push(styles.equalButton);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
