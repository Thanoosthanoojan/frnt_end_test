import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from '../atoms';

const SignIn = () => {
  const [email, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [emailError, onChangeEmailError] = React.useState('');
  const [passwordError, onChangePasswordError] = React.useState('');

  const checkEmailPassword = (emailValue, passwordValue) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (passwordValue === '') {
      onChangePasswordError('Please enter your password');
    } else {
      onChangePasswordError('');
    }
    if (emailValue === '') {
      onChangeEmailError('Please enter your email');
    } else if (reg.test(emailValue) === false) {
      onChangeEmailError('Please enter valid email');
    } else {
      onChangeEmailError('');
    }
  };

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.container]}>
        <Input
          label="Email"
          placeholder="your@address.net"
          onChange={value => onChangeText(value)}
          error={emailError}
        />
        <Input
          label="Password"
          placeholder="***********"
          onChange={value => onChangePassword(value)}
          error={passwordError}
          secureTextEntry
        />
        <Button
          buttonTitle="Sign-in"
          onPress={() => checkEmailPassword(email, password)}
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
