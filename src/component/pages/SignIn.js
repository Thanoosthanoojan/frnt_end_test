import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from '../atoms';

const SignIn = () => {
  const [email, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.container]}>
        <Input
          label="Email"
          placeholder="your@address.net"
          onChange={value => onChangeText(value)}
          value={email}
        />
        <Input
          label="Password"
          placeholder="***********"
          onChange={value => onChangePassword(value)}
          value={password}
          secureTextEntry
        />
        <Button
          buttonTitle="Sign-in"
          onPress={() => console.log(email, password)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  container: {
    justifyContent: 'center',
    height: 230,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
});

export default SignIn;
