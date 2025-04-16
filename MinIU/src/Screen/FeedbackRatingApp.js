import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackRatingApp = () => {
  return (
    <View style={styles.screen}>
      <Text>FeedbackRatingApp Screen</Text>
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

export default FeedbackRatingApp;