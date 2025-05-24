import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import MainDrawer from './src/Drawer/MainDrawer';

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(30);
  const [showOpenButton, setShowOpenButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setShowOpenButton(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleOpenApp = () => {
    setShowOpenButton(false); 
    setLoadingProgress(101); 
  };

  if (loadingProgress < 101) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar hidden />
        <Image
          source={require('./assets/logo.png')}
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
            onPress={handleOpenApp}
            activeOpacity={0.7}
          >
            <Text style={styles.openButtonText}>OPEN</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <>
      <MainDrawer />
    </>
  );
}

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