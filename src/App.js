/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
// import {creatStackNavigator, createAppContainer} from 'react-navigation'; 

export default class App extends Component{
  render() {
    return (
      <LoginForm/>
    );
  }
}

// const AppStackNavigator = creatStackNavigator ({
//   LoginForm: LoginForm,
//   RegisterForm: RegisterForm
// })

// const AppContainer = createAppContainer (AppStackNavigator);