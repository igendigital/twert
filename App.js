import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, ScrollView, StatusBar  } from 'react-native';
import MyDrawer from './components/MyDrawer'

const App = () => {
  const onPressLearnMore = () => {
    console.log('dsadasda');
  };

  return (
    <View>
      <Text>asdsds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App;
