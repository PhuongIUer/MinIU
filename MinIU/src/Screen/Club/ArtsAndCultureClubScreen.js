import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import EC from '../../../assets/Club/ArtsAndCultureClub/EC.png';
import IFC from '../../../assets/Club/ArtsAndCultureClub/IFC.png';
import IA from '../../../assets/Club/ArtsAndCultureClub/IA.png';
import IAC from '../../../assets/Club/ArtsAndCultureClub/IAC.png';
import IGC from '../../../assets/Club/ArtsAndCultureClub/IGC.png';
import IL from '../../../assets/Club/ArtsAndCultureClub/IL.png';
import JC from '../../../assets/Club/ArtsAndCultureClub/JC.png';
import KC from '../../../assets/Club/ArtsAndCultureClub/KC.png';

const ArtsAndCultureClub = () => {
  const navigation = useNavigation();
  const clubImages = [
    { source: IFC, name: 'IFC', url: 'fb.com/french.club.iu' },
    { source: JC, name: 'JC', url: 'fb.com/IUJapanClub' },
    { source: EC, name: 'EC', url: 'fb.com/IU.IEC' },
    { source: IA, name: 'IA', url: 'fb.com/arteam.iu' },
    { source: KC, name: 'KC', url: 'fb.com/koreanyouthgeneration' },          
    { source: IAC, name: 'IAC', url: 'fb.com/artclubiem' },
    { source: IGC, name: 'IGC', url: 'fb.com/iuguitarclub.since2010' },
    { source: IL, name: 'IL', url: 'fb.com/@IU.LUMB/' },        
  ];

  const handlePress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        const webUrl = url.replace('fb.com/', 'https://www.facebook.com/');
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {clubImages.map((club, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.imageContainer}
          onPress={() => handlePress(club.url)}
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
});

export default ArtsAndCultureClub;