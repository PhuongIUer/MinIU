import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bottom from '../../assets/Club/bottom.png'; 
import top from '../../assets/Club/top.png'; 
const Club = () => {
  const navigation = useNavigation();

  const clubs = [
    { name: 'Arts and Culture Club', screen: 'Arts and Culture Club' },
    { name: 'Academic and Skills Club', screen: 'Academic and Skills Club' },
    { name: 'Learning Support and Personal Dev Club', screen: 'Learning Support and Personal Dev Club' },
    { name: 'Volunteer and Social Work Club', screen: 'Volunteer and Social Work Club' },
    { name: 'Sports and Esports Club', screen: 'Sports and Esports Club' },
  ];

  return (
    <View style={styles.screen}>
      <Image 
        source={top} 
        style={styles.image}
        resizeMode="contain"
      />
      {clubs.map((club, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(club.screen)}
        >
          <Text style={styles.buttonText}>{club.name}</Text>
        </TouchableOpacity>
      ))}
      <Image 
        source={bottom} 
        style={styles.image}
        resizeMode="contain"
      />
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

export default Club;