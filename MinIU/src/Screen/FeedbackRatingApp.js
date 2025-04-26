import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const FeedbackRatingApp = () => {
  const navigation = useNavigation();
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