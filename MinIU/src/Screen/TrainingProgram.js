import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const MAJOR_DATA = [
  { name: 'Department of Biotechnology', logo: require('../../assets/Logo/BT.png') },
  { name: 'School of Chemical & Environmental Engineering', logo: require('../../assets/Logo/CH.png') },
  { name: 'School of Civil Engineering and Management', logo: require('../../assets/Logo/CE.png') },
  { name: 'School of Electrical Engineering', logo: require('../../assets/Logo/EE.png') },
  { name: 'Department of Physics', logo: require('../../assets/Logo/PH.png') },
  { name: 'School of Industrial Engineering and Management', logo: require('../../assets/Logo/IEM.jpg') },
  { name: 'School of Computer Science and Engineering', logo: require('../../assets/Logo/IT.png') },
  { name: 'Mathematics', logo: require('../../assets/Logo/MA.png') },
  { name: 'School of Business',  logo: require('../../assets/Logo/BS.jpg') },
  { name: 'School of Biomedical Engineering', logo: require('../../assets/Logo/BME.jpg') },
];

const TrainingProgram = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Major Table', { 
        majorName: item.name,
        logo: item.logo
      })}
    >
      <View style={styles.itemContent}>
        <Image 
          source={item.logo} 
          style={styles.itemLogo} 
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={MAJOR_DATA}
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
  itemLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default TrainingProgram;