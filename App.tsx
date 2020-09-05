import * as React from 'react';
import { StatusBar, Text, View, StyleSheet, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

export default function App() {
  return (
    <ImageBackground
    source={require('./assets/flower-png.png')}
    style={styles.container}
    >
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    
    <View style={styles.main}>
      <View style={styles.containerInit}>
        <Text style={styles.paragraph}>
          Welcome!
        </Text>
      </View>
      <Text style={styles.description}>Login</Text>
      <TextInput
      style={styles.input}
      placeholder="Name or Email"/>
      <Text style={styles.description}>Password</Text>
      <TextInput
      secureTextEntry={true}
      style={styles.input}
      placeholder="*****"/>
      <RectButton style={styles.button}>
          <Text style={styles.buttonText}>
            Sing in
          </Text>
        </RectButton>      
    </View>
    </ ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 32 +  Constants.statusBarHeight,
    opacity: 0.7,
  },
  containerInit: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 24,
    color: '#647051',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  description: {
    color: '#647051',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
    maxWidth: 260,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#ED8D7A',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  }
});
