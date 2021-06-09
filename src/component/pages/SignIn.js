import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.contentCenter}>
      <Text style={styles.textStyle}>SignIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default SignIn;
