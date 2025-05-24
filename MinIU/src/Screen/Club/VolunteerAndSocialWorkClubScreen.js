import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import COSS from '../../../assets/Club/VolunteerAndSocialWorkClub/COSS.png';
import H2BH from '../../../assets/Club/VolunteerAndSocialWorkClub/H2BH.png';
import IBC from '../../../assets/Club/VolunteerAndSocialWorkClub/IBC.png';
import II from '../../../assets/Club/VolunteerAndSocialWorkClub/II.png';
import ISWT from '../../../assets/Club/VolunteerAndSocialWorkClub/ISWT.png';
import TOSA from '../../../assets/Club/VolunteerAndSocialWorkClub/TOSA.png';

const VolunteerAndSocialWorkClub = () => {
  const navigation = useNavigation();
  const clubImages = [    
    { source: H2BH, name: 'FC', url: 'fb.com/helptobehelped' },
    { source: ISWT, name: 'ISWT', url: 'fb.com/IUswt.link' },
    { source: TOSA, name: 'TOSA', url: 'fb.com/iuTosa' },    
    { source: IBC, name: 'IBC', url: 'fb.com/IU.buddyclub' },
    { source: COSS, name: 'COSS', url: 'fb.com/IU.COSS' },
    { source: II, name: 'II', url: 'fb.com/inspirit.iuclub' },
  ];
  const navBack = 'Volunteer and Social Work Club'
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
    fontFamTOSAy: 'Montserrat',
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

export default VolunteerAndSocialWorkClub;