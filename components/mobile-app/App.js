import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;