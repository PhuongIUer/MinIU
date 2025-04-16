import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Form = () => {
  return (
    <View style={styles.screen}>
      <Text>Form Screen</Text>
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

export default Form;