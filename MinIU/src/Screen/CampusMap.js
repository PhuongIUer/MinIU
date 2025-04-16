import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CampusMap = () => {
  return (
    <View style={styles.screen}>
      <Text>CampusMap Screen</Text>
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

export default CampusMap;