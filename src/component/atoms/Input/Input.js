import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({
  label,
  onChange,
  value,
  placeholder,
  keyboardType = 'default',
  secureTextEntry,
}) => {
  return (
    <View style={[styles.Container]}>
      <View style={[styles.labelContainer]}>
        <Text style={[styles.labelStyle]}>{label}</Text>
      </View>
      <View>
        <View style={[styles.inputContainer]}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={text => onChange(text)}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="black"
            value={value}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: 200,
    alignItems: 'flex-start',
    marginRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'column',
  },
  labelStyle: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default Input;
