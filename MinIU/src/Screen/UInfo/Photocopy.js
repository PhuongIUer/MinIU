import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Photocopy = () => {
  const navigation = useNavigation();
  const photocopyImages = [
    require('../../../assets/Unimart/unimart-(1).jpg'),
    require('../../../assets/Unimart/unimart-(2).jpg'),
    require('../../../assets/Unimart/unimart-(3).jpg'),
    require('../../../assets/Unimart/unimart-(4).jpg'),
    require('../../../assets/Unimart/unimart-(5).jpg'),
    require('../../../assets/Unimart/unimart-(6).jpg'),
    require('../../../assets/Unimart/unimart-(7).jpg'),
    require('../../../assets/Unimart/unimart-(8).jpg'),
    require('../../../assets/Unimart/unimart-(9).jpg'),
    require('../../../assets/Unimart/unimart-(10).jpg'),
    require('../../../assets/Unimart/unimart-(11).jpg'),
    require('../../../assets/Unimart/unimart-(12).jpg'),
  ];

  return (
    <View style={styles.container}>
    <ScrollView >
      <View style={styles.header}>
        <Text style={styles.title}>Photocopy Services at UNI Mart</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location & Hours</Text>
        <Text style={styles.text}>
          📍 Located on the third floor of Building A1, UNI Mart serves as both a stationery store and a convenience shop.
        </Text>
        <Text style={styles.text}>
          ⏰ Open 8 am to 5 pm
        </Text>
        <Text style={styles.text}>
          🌐 Contact: <Text style={styles.link}>https://www.facebook.com/UNIMartstore</Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        <Text style={styles.text}>
          📠 Printing services for documents and academic materials
        </Text>
        <Text style={styles.text}>
          📝 Essential during midterms and finals for printing study materials
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Products</Text>
        <Text style={styles.text}>
          🖊️ Stationery: Pens, notebooks, paper, rulers, erasers, folders
        </Text>
        <Text style={styles.text}>
          🛍️ School-branded items: ID lanyards, clothing, caps, backpacks
        </Text>
        <Text style={styles.text}>
          🍪 Snacks and beverages: Ice cream, soft drinks, confectionery
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Photo Gallery</Text>
        <View style={styles.imageGallery}>
          {photocopyImages.map((image, index) => (
            <Image 
              key={index} 
              source={image} 
              style={styles.image} 
              resizeMode="contain"
            />
          ))}
        </View>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteText}>
          Most IU students studying at the Thủ Đức campus will find themselves visiting UNI Mart multiple times.
        </Text>
      </View>
    </ScrollView>
        <TouchableOpacity 
      style={styles.backButton}
      onPress={() => navigation.navigate('Useful Information')}
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
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
    lineHeight: 22,
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  imageGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  note: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  noteText: {
    fontSize: 15,
    color: '#1976d2',
    fontStyle: 'italic',
    textAlign: 'center',
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

export default Photocopy;