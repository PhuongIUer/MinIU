import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import EIV from '../../../assets/Club/LearningSupportAndPersonalDevClub/EIV.png';
import ESC from '../../../assets/Club/LearningSupportAndPersonalDevClub/ESC.png';
import ETV from '../../../assets/Club/LearningSupportAndPersonalDevClub/ETV.png';
import GDG from '../../../assets/Club/LearningSupportAndPersonalDevClub/GDG.png';
import IFC from '../../../assets/Club/LearningSupportAndPersonalDevClub/IFC.png';
import IMC from '../../../assets/Club/LearningSupportAndPersonalDevClub/IMC.png';
import Tedx from '../../../assets/Club/LearningSupportAndPersonalDevClub/Tedx.png';
import uHub from '../../../assets/Club/LearningSupportAndPersonalDevClub/uHub.png';

const LearningSupportAndPersonalDevClub = () => {
  
  const navigation = useNavigation();
  const clubImages = [
    { source: GDG, name: 'GDG', url: 'fb.com/gdgoc.hcmiu' },    
    { source: ESC, name: 'ESC', url: 'fb.com/esc.hcmiu' },
    { source: ETV, name: 'ETV', url: 'fb.com/IU.ETV' },
    { source: EIV, name: 'EIV', url: 'fb.com/profile.php?id=100092312352951' },    
    { source: IMC, name: 'IMC', url: 'fb.com/iumartic' },
    { source: IFC, name: 'IFC', url: 'fb.com/iufinanceclub' },
    { source: Tedx, name: 'Tedx', url: 'fb.com/tedxhcmiu' },
    { source: uHub, name: 'uHub', url: 'fb.com/UHubNetwork' },
  ];
  const navBack = 'Learning Support and Personal Dev Club'
  const handlePress = async (name,source,url) => {
    navigation.navigate('Card Screen', {name: name,source: source,url: url,navBack: navBack})
  };
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {clubImages.map((club, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.imageContainer}
          onPress={() => handlePress(club.name,club.source,club.url,navBack)}
          activeOpacity={0.7}
        >
          <Image 
            source={club.source} 
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
    <TouchableOpacity 
      style={styles.backButton}
      onPress={() => navigation.navigate('Club')}
      activeOpacity={0.7}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  </View>
    
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'gainsboro',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 130,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  backButton: {
    position: 'absolute',
    bottom: 20, // Adjust as needed based on your status bar
    right: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure it's above other elements
  },
});

export default LearningSupportAndPersonalDevClub;