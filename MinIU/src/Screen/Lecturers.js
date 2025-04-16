import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lecturers = () => {
  return (
    <View style={styles.screen}>
      <Text>Lecturers Screen</Text>
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

export default Lecturers;