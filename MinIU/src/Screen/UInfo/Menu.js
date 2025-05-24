import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import bb_logo from '../../../assets/Canteen/Menu/bb.png';
import banhviet from '../../../assets/Canteen/Menu/banhviet.jpg';
import bigu_logo from '../../../assets/Canteen/Menu/bigu.jpg';
import comviet_logo from '../../../assets/Canteen/Menu/comviet.jpg';
import hd_logo from '../../../assets/Canteen/Menu/hd.jpg';
import storycoffee_logo from '../../../assets/Canteen/Menu/storycoffee.png';
import sushumashe_logo from '../../../assets/Canteen/Menu/sushumashe.jpg';
import thezerocoffee_logo from '../../../assets/Canteen/Menu/thezerocoffee.jpg';

const Menu = ({ route }) => {
  const navigation = useNavigation();
  const screenback = route?.params?.screenback || 'MinIU - Home'; 
  const name = 'Menu';
  const stores = [
    {
      id: '1',
      name: 'B&B Cafeteria',
      logo: bb_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/bb-(1).jpg'),
        require('../../../assets/Canteen/Menu/bb-(2).jpg')
      ]
    },
    {
      id: '2',
      name: 'Bigu',
      logo: bigu_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/bigu-(1).jpg'),
        require('../../../assets/Canteen/Menu/bigu-(2).jpg'),
        require('../../../assets/Canteen/Menu/bigu-(3).jpg')
      ]
    },
    {
      id: '3',
      name: 'Com Viet',
      logo: comviet_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/comviet-(1).jpg'),
        require('../../../assets/Canteen/Menu/comviet-(2).jpg'),
        require('../../../assets/Canteen/Menu/comviet-(3).jpg')
      ]
    },
    {
      id: '4',
      name: 'H & D Food court',
      logo: hd_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/hd-(1).jpg'),
        require('../../../assets/Canteen/Menu/hd-(2).jpg'),
        require('../../../assets/Canteen/Menu/hd-(3).jpg'),
        require('../../../assets/Canteen/Menu/hd-(4).jpg'),
        require('../../../assets/Canteen/Menu/hd-(5).jpg')
      ]
    },
    {
      id: '5',
      name: 'Story Coffee',
      logo: storycoffee_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/storycoffee-(1).jpg'),
        require('../../../assets/Canteen/Menu/storycoffee-(2).jpg')
      ]
    },
    {
      id: '6',
      name: 'Sushi mashe',
      logo: sushumashe_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/sushumashe-(1).jpg')
      ]
    },
    {
      id: '7',
      name: 'The Zero Coffee',
      logo: thezerocoffee_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/thezerocoffee-(1).jpg')
      ]
    },
    {
      id: '8',
      name: 'Banh Viet',
      logo: banhviet,
      menuImages: [
        require('../../../assets/Canteen/Menu/banhviet.jpg')
      ]
    },
  ];
  const handleBackPress = () => {
    navigation.navigate(screenback);
  };
  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      {stores.map((store) => (
        <View key={store.id} style={styles.storeWrapper}>
          <TouchableOpacity 
            style={styles.storeContainer}
            onPress={() => navigation.navigate('MenuHolder', { store, screenback: name })}
          >
            <Image source={store.logo} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.storeName}>{store.name}</Text>
        </View>
      ))}
    </ScrollView>
          <TouchableOpacity 
            style={[styles.actionButton, styles.backButton]}
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  storeWrapper: {
    width: '45%',
    alignItems: 'center',
    margin: 8,
  },
  storeContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  storeName: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
    color: '#222831',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
    fontSize: 16,
  },
  actionButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backButton: {
    bottom: 20,
    right: 20,
  },
});

export default Menu;