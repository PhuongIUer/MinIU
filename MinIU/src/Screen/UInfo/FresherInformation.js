import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FresherInformation = () => {
  return (
    <View style={styles.screen}>
      <Text>FresherInformation Screen</Text>
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

export default FresherInformation;