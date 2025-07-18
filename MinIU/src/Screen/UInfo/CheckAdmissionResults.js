import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const showURLConfirmation = (url) => {
  Alert.alert(
    "Confirmation",
    "Do you want to vistit Driving License website ?",
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

const CheckAdmissionResults = () => {
  const url = `https://ketquaxt.hcmiu.edu.vn/tra-cuu-ket-qua`;
  const navigation = useNavigation();
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
      <Text style={styles.text}>Redirecting to Check Admission Results Web...</Text>
      <Text style={styles.hint}>If you are not redirected automatically, tap the button below:</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => showURLConfirmation(url)}>
        <Text style={styles.buttonText}>Open the link</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Useful Information')}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
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
  backButton: {
    bottom: 20, 
    right: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default CheckAdmissionResults;