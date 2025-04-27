import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import bottom from '../../assets/Club/bottom.png'; 
import top from '../../assets/Club/top.png';

// Icons for each club
const clubIcons = {
  'Arts and Culture Club': 'palette',
  'Academic and Skills Club': 'school',
  'Learning Support and Personal Dev Club': 'psychology',
  'Volunteer and Social Work Club': 'volunteer-activism',
  'Sports and Esports Club': 'sports-esports'
};

const Club = () => {
  const navigation = useNavigation();

  const clubs = [
    { name: 'Arts and Culture Club', screen: 'Arts and Culture Club' },
    { name: 'Academic and Skills Club', screen: 'Academic and Skills Club' },
    { name: 'Learning Support and Personal Dev Club', screen: 'Learning Support and Personal Dev Club' },
    { name: 'Volunteer and Social Work Club', screen: 'Volunteer and Social Work Club' },
    { name: 'Sports and Esports Club', screen: 'Sports and Esports Club' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate(item.screen)}
    >
      <View style={styles.itemContent}>
        <MaterialIcons name={clubIcons[item.name]} size={28} color="#4e54c8" style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Image 
        source={top} 
        style={styles.topImage}
        resizeMode="contain"
      />

      <FlatList
        data={clubs}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
      />

      <Image 
        source={bottom} 
        style={styles.bottomImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  bottomImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default Club;