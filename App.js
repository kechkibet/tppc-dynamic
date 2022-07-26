import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Button, View,NativeModules } from 'react-native';
const { CalendarModule } = NativeModules;

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app dsafds!</Text>
      <StatusBar style="auto" />
      <Button
     title="Click to invoke your native module!"
     color="#841584"
     onPress={onPress}/>
    </View>
    
  );
}
const onPress = () => {
  CalendarModule.createCalendarEvent('testName', 'testLocation');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
