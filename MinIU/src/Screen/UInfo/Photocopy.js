import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Photocopy = () => {
  return (
    <View style={styles.screen}>
      <Text>Photocopy Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Photocopy;