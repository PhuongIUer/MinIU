import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Canteen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to Our Canteen</Text>
      
      <Image 
        source={require('../../../assets/Canteen/canteen.jpg')} 
        style={styles.canteenImage}
        resizeMode="cover"
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact Canteen')}>
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
    </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  canteenImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    flexGrow:1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10
  },
  button: {
    backgroundColor: '#2c3592',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Canteen;