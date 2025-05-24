import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CampusMap = () => {
  const navigation = useNavigation();

  const maps = [
    { 
      name: 'International University - Campus A', 
      screen: 'International University - Campus A',
      icon: 'account-balance'
    },
    { 
      name: 'Central Library - Campus L', 
      screen: 'Central Library - Campus L',
      icon: 'local-library'
    },
    { 
      name: 'Institute for Environment and Resources Campus C', 
      screen: 'Institute for Environment and Resources Campus C',
      icon: 'nature-people'
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <LinearGradient
        colors={['#2c3592', '#8f94fb']}
        style={styles.iconContainer}
      >
        <MaterialIcons name={item.icon} size={28} color="white" />
      </LinearGradient>
      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={maps}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
});

export default CampusMap;