import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackLecturers = () => {
  return (
    <View style={styles.screen}>
      <Text>FeedbackLecturers Screen</Text>
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

export default FeedbackLecturers;