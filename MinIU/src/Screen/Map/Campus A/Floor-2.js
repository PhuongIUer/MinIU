import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons'; 

const mapFloor_2 = require('../../../../assets/Map/A/Floor-2/Floor-2.png');

const Floor_2 = () => {
  const navigation = useNavigation();
  
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);


  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = savedTranslateX.value + e.translationX;
      translateY.value = savedTranslateY.value + e.translationY;
    })
    .onEnd(() => {
      savedTranslateX.value = translateX.value;
      savedTranslateY.value = translateY.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  const composedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

  const handleBackPress = () => {
    handleResetPress(); 
    navigation.navigate('International University - Campus A');
  };

  const handleResetPress = () => {
    scale.value = withTiming(1);
    savedScale.value = 1;
    translateX.value = withTiming(0);
    translateY.value = withTiming(0);
    savedTranslateX.value = 0;
    savedTranslateY.value = 0;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.actionButton, styles.resetButton]}
        onPress={handleResetPress}
        activeOpacity={0.7}
      >
        <Ionicons name="expand-outline" size={24} color="white" />
      </TouchableOpacity>
      
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Animated.Image 
            source={mapFloor_2} 
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
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
  resetButton: {
    bottom: 80,
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Floor_2;