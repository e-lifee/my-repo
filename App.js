import { StatusBar } from 'expo-status-bar';
import React from 'react';
// Import the functions you need from the SDKs you need

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
const storage = firebase.storage();


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Auth ve Storage örneklerini alın
const auth = firebase.auth();

// Dışa aktar
export { db };

// Auth ve Storage örneklerini de dışa aktarabilirsiniz
export { auth, storage };

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
