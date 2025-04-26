import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CampusMap = () => {
  const navigation = useNavigation();

  const maps = [
    { name: 'International University - Campus A', screen: 'International University - Campus A' },
    { name: 'Central Library - Campus L', screen: 'Central Library - Campus L' },
    { name: 'Institute for Environment and Resources Campus C', screen: 'Institute for Environment and Resources Campus C' },
  ];



  return (
      <View style={styles.screen}>
        {maps.map((map, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(map.screen)}
          >
            <Text style={styles.buttonText}>{map.name}</Text>
          </TouchableOpacity>
        ))}        
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
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: '25%',
    },
  });

export default CampusMap;