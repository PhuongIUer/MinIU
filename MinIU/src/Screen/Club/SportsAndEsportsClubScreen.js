import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import IB from '../../../assets/Club/SportsAndEsportsClub/IB.png';
import ICC from '../../../assets/Club/SportsAndEsportsClub/ICC.png';
import IFC from '../../../assets/Club/SportsAndEsportsClub/IFC.png';
import IHEC from '../../../assets/Club/SportsAndEsportsClub/IHEC.png';
import IPP from '../../../assets/Club/SportsAndEsportsClub/IPP.png';

const SportsAndEsportsClub = () => {
  const navigation = useNavigation();
  const clubImages = [        
    { source: IFC, name: 'IFC', url: 'fb.com/IUFootballClub' },    
    { source: IPP, name: 'IPP', url: 'fb.com/iu.ppc2023' },
    { source: ICC, name: 'ICC', url: 'fb.com/icchcmiu' },
    { source: IB, name: 'IB', url: 'fb.com/IuBadmintonClub/' },
    { source: IHEC, name: 'IHEC', url: 'fb.com/IUEsports' },
  ];
  const navBack = 'Sports and Esports Club'
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

export default SportsAndEsportsClub;