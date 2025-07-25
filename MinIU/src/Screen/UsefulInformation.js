import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const UsefulInformationIcons = {
  'Fresher Information': 'face', 
  'After Graduate Information': 'school', 
  'Photocopy': 'content-copy', 
  'Canteen': 'restaurant', 
  'Driving License': 'directions-car',
  'Check Admission Results': 'find-in-page',
};

const UsefulInformation = () => {
  const navigation = useNavigation();

  const UsefulInformations = [
    { name: 'Fresher Information', screen: 'Fresher Information' },
    { name: 'After Graduate Information', screen: 'After Graduate Information' },
    { name: 'Photocopy', screen: 'Photocopy' },
    { name: 'Canteen', screen: 'Canteen' },
    { name: 'Driving License', screen: 'Driving License' },
    { name: 'Check Admission Results', screen: 'Check Admission Results' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate(item.screen, { screenback: 'Useful Information' })}
    >
      <View style={styles.itemContent}>
        <MaterialIcons name={UsefulInformationIcons[item.name]} size={28} color="#2c3592" style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={UsefulInformations}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 screen: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
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
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default UsefulInformation;