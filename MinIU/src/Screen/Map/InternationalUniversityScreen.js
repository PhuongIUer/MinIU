import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const InternationalUniversity = () => {
  const navigation = useNavigation();

  const campusA = [
    { name: 'Floor 1 - Campus A', screen: 'Floor 1 - Campus A' },
    { name: 'Floor 2 - Campus A', screen: 'Floor 2 - Campus A' },
    { name: 'Floor 3 - Campus A', screen: 'Floor 3 - Campus A' },
    { name: 'Floor 4 - Campus A', screen: 'Floor 4 - Campus A' },
    { name: 'Floor 5 - Campus A', screen: 'Floor 5 - Campus A' },
    { name: 'Floor 6 - Campus A', screen: 'Floor 6 - Campus A' },
    { name: 'Floor 7 - Campus A', screen: 'Floor 7 - Campus A' },
  ];
  
  return (
    <View style={styles.screen}>
      {campusA.map((club, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => navigation.navigate(club.screen)}
              >
                <Text style={styles.buttonText}>{club.name}</Text>
              </TouchableOpacity>
            ))}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('Campus Map')}
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
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '25%',
  },
});

export default InternationalUniversity;