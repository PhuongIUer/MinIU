import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Canteen = ({ route }) => {
  const navigation = useNavigation();
  const screenback = route?.params?.screenback || 'MinIU - Home'; 
  const name = 'Canteen';
  const handleBackPress = () => {
    navigation.navigate(screenback);
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome to Our Canteen</Text>
        
        <Image 
          source={require('../../../assets/Canteen/canteen.jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu', { screenback: name })}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact Canteen' , { screenback: name })}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        </View>
        
        <Image 
          source={require('../../../assets/Canteen/canteen (1).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        <Image 
          source={require('../../../assets/Canteen/canteen (2).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        <Image 
          source={require('../../../assets/Canteen/canteen (3).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        <Image 
          source={require('../../../assets/Canteen/canteen (4).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        <Image 
          source={require('../../../assets/Canteen/canteen (5).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
        <Image 
          source={require('../../../assets/Canteen/canteen (6).jpg')} 
          style={styles.canteenImage}
          resizeMode="cover"
        />
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
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  canteenImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2c3592',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
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

export default Canteen;