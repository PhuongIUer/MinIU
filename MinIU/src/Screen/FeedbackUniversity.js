import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking, Alert, TouchableOpacity } from 'react-native';
const showURLConfirmation = (url) => {
  Alert.alert(
    "Confirmation",
    "Do you want to feedback about IU ?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { 
        text: "Agree", 
        onPress: () => goURL(url) 
      }
    ]
  );
};
const goURL = async (url) =>{
  Linking.openURL(url).catch(err => {
    Alert.alert('Error', 'Failed to open the link');
    console.error('Failed to open URL:', err);
  });
};
const FeedbackUniversity = () => {
  const url = `https://forms.gle/RmVoFifP2NSJBvtd6`;

  useEffect(() => {
    showURLConfirmation(url); 
  }, []);

  const openLink = () => {
    Linking.openURL(url).catch(err => {
      Alert.alert('Error', 'Failed to open the link');
      console.error('Failed to open URL:', err);
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Redirecting to feedback form...</Text>
      <Text style={styles.hint}>If you are not redirected automatically, tap the button below:</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => showURLConfirmation(url)}>
        <Text style={styles.buttonText}>Open Feedback Form</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    width: 300,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackUniversity;