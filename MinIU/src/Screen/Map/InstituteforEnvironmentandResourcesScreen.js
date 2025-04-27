import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const InstituteforEnvironmentandResources = () => {
  const navigation = useNavigation();
  const footerPosition = React.useRef(new Animated.Value(200)).current;

    React.useEffect(() => {
      Animated.timing(footerPosition, {
        toValue: -40,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, []);
  const campusC = [
    { name: 'Floor 4 - Campus C', screen: 'Floor 4 - Campus C' },
    { name: 'Floor 5 - Campus C', screen: 'Floor 5 - Campus C' },   
  ];

  return (
    <View style={styles.screen}>
      {campusC.map((club, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => navigation.navigate(club.screen)}
              >
                <Text style={styles.buttonText}>{club.name}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
              </TouchableOpacity>
            ))}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('Campus Map')}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Animated.View 
                            style={[
                              styles.footerContainer,
                              {
                                transform: [{ translateY: footerPosition }]
                              }
                            ]}
                          >
                            <Image 
                              source={require('../../../assets/Map/Enviroment.png')} 
                              style={styles.footerImage}
                              resizeMode="contain"
                            />
                          </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    width: 300,
    marginHorizontal: 16,
    marginVertical: 4,
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
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '25%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: -80,
    width: '100%',
    alignItems: 'center',
  },
  footerImage: {
    bottom:30,
    width: 370,
    height: 300,
  }
});

export default InstituteforEnvironmentandResources;