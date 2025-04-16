import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Club = () => {
  return (
    <View style={styles.screen}>
      <Text>Club Screen</Text>
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

export default Club;