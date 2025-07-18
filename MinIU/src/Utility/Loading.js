// Loading.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Loading = ({ loadingProgress, showOpenButton, onOpenApp }) => {
  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require('./../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to MinIU</Text>

      <Text style={styles.percentageText}>{loadingProgress}%</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${loadingProgress}%` }]} />
      </View>

      {showOpenButton && (
        <TouchableOpacity 
          style={styles.openButton} 
          onPress={onOpenApp}
          activeOpacity={0.7}
        >
          <Text style={styles.openButtonText}>OPEN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
  },
  percentageText: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 10,
  },
  progressBarBackground: {
    width: '70%',
    height: 10,
    backgroundColor: '#87cae2',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 30,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2c3592',
  },
  openButton: {
    backgroundColor: '#2c3592',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  openButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Loading;