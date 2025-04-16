import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutMe = () => {
  return (
    <View style={styles.screen}>
      <Text>AboutMe Screen</Text>
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

export default AboutMe;