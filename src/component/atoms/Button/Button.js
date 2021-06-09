import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({buttonTitle, onPress}) => {
  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity onPress={() => onPress()} style={[styles.button]}>
        <Text style={[styles.buttonText]}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'lightgrey',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default Button;
