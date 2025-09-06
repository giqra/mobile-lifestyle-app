import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/welcome.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Your Habit Tracker</Text>
      <Text style={styles.subtitle}>Track your habits and achieve your goals!</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleSignIn}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#20C997',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#20C997',
    fontSize: 16,
  },
});

export default OnboardingScreen;