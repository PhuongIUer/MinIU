import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

import Biodemic from '../../../assets/Club/AcademicAndSkillsClub/Biodemic.png';
import IAC from '../../../assets/Club/AcademicAndSkillsClub/IAC.png';
import IEMC from '../../../assets/Club/AcademicAndSkillsClub/IEMC.png';
import IPC from '../../../assets/Club/AcademicAndSkillsClub/IPC.png';
import ISSC from '../../../assets/Club/AcademicAndSkillsClub/ISSC.png';
import IT from '../../../assets/Club/AcademicAndSkillsClub/IT.png';
import IUA from '../../../assets/Club/AcademicAndSkillsClub/IUA.png';
import IUP from '../../../assets/Club/AcademicAndSkillsClub/IUP.png';

const AcademicAndSkillsClub = () => {
  const navigation = useNavigation();
  const clubImages = [
    { source: IEMC, name: 'IEMC', url: 'fb.com/EMC.eventclub' },
    { source: IPC, name: 'IPC', url: 'fb.com/IUPhotoClub' },
    { source: ISSC, name: 'ISSC', url: 'fb.com/SoftSkillsClubIU' },    
    { source: Biodemic, name: 'Biodemic', url: 'fb.com/BIODEMIC/' }, 
    { source: IAC, name: 'IAC', url: 'fb.com/iemacademicclub' },
    { source: IT, name: 'IT', url: 'fb.com/iutechnique' },          
    { source: IUA, name: 'IUA', url: 'fb.com/dhqt.tvhnts' },
    { source: IUP, name: 'IUP', url: 'fb.com/iupodcaster' },
  ];
  const navBack = 'Academic and Skills Club'
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
  container: {
    flex: 1,
    position: 'relative', 
  },
  scrollContainer: {
    backgroundColor: 'gainsboro',
    paddingBottom: 20, 
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

export default AcademicAndSkillsClub;