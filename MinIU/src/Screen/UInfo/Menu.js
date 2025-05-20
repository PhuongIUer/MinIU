import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// Import all your images
import bb_logo from '../../../assets/Canteen/Menu/bb.png';
import banhviet from '../../../assets/Canteen/Menu/banhviet.jpg';
import bigu_logo from '../../../assets/Canteen/Menu/bigu.jpg';
import comviet_logo from '../../../assets/Canteen/Menu/comviet.jpg';
import hd_logo from '../../../assets/Canteen/Menu/hd.jpg';
import storycoffee_logo from '../../../assets/Canteen/Menu/storycoffee.png';
import sushumashe_logo from '../../../assets/Canteen/Menu/sushumashe.jpg';
import thezerocoffee_logo from '../../../assets/Canteen/Menu/thezerocoffee.jpg';

const Menu = ({ navigation }) => {
  const stores = [
    {
      id: '1',
      name: 'BB',
      logo: bb_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/bb-(1).jpg'),
        require('../../../assets/Canteen/Menu/bb-(2).jpg')
      ]
    },
    {
      id: '2',
      name: 'Banh Viet',
      logo: banhviet,
      menuImages: [
        require('../../../assets/Canteen/Menu/banhviet.jpg')
      ]
    },
    {
      id: '3',
      name: 'Bigu',
      logo: bigu_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/bigu-(1).jpg'),
        require('../../../assets/Canteen/Menu/bigu-(2).jpg'),
        require('../../../assets/Canteen/Menu/bigu-(3).jpg')
      ]
    },
    {
      id: '4',
      name: 'Com Viet',
      logo: comviet_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/comviet-(1).jpg'),
        require('../../../assets/Canteen/Menu/comviet-(2).jpg'),
        require('../../../assets/Canteen/Menu/comviet-(3).jpg')
      ]
    },
    {
      id: '5',
      name: 'HD',
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
      id: '6',
      name: 'Story Coffee',
      logo: storycoffee_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/storycoffee-(1).jpg'),
        require('../../../assets/Canteen/Menu/storycoffee-(2).jpg')
      ]
    },
    {
      id: '7',
      name: 'Sushimashe',
      logo: sushumashe_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/sushumashe-(1).jpg')
      ]
    },
    {
      id: '8',
      name: 'The Zero Coffee',
      logo: thezerocoffee_logo,
      menuImages: [
        require('../../../assets/Canteen/Menu/thezerocoffee-(1).jpg')
      ]
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stores.map((store) => (
        <TouchableOpacity 
          key={store.id}
          style={styles.storeContainer}
          onPress={() => navigation.navigate('MenuHolder', { store })}
        >
          <Image source={store.logo} style={styles.logo} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  storeContainer: {
    width: '45%',
    aspectRatio: 1,
    margin: 8,
    backgroundColor: '#f5f5f5',
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
});

export default Menu;