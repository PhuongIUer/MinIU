import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DivisionsAndCenters = () => {
  return (
    <View style={styles.screen}>
      <Text>DivisionsAndCenters Screen</Text>
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

export default DivisionsAndCenters;