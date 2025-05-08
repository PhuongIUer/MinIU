import React, { useEffect }  from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, Linking, Dimensions, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
const showURLConfirmation = (url) => {
  Alert.alert(
    "Confirmation",
    "Do you want to visit this club?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { 
        text: "Agree", 
        onPress: () => goURL(url) 
      }
    ]
  );
};

const goURL = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      const webUrl = url.replace('fb.com/', 'https://www.facebook.com/');
      await Linking.openURL(webUrl);
    }
  } catch (error) {
    console.error('An error occurred', error);
    Alert.alert("Lỗi", "Không thể mở liên kết");
  }
};
const CardScreen = ({ route }) => {
  const {name, source, url, navBack} = route.params;
  const navigation = useNavigation();
  
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);
  
  // Gesture handlers
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
    handleResetPress(); // Reset before navigating back
    navigation.navigate(navBack);
  };

  const handleResetPress = () => {
    // Reset all animation values with smooth animation
    scale.value = withTiming(1.8);
    savedScale.value = 1;
    translateX.value = withTiming(-20);
    translateY.value = withTiming(-30);
    savedTranslateX.value = 0;
    savedTranslateY.value = 0;
  };
    useEffect(() => {
      handleResetPress(); // Automatically open the link when the screen loads
    }, []);
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
      
      <TouchableOpacity 
        style={[styles.actionButton, styles.URL]}
        onPress={() => showURLConfirmation(url)} // Thay đổi ở đây
        activeOpacity={0.7}
      >
        <Ionicons name="enter-outline" size={24} color="white" />
      </TouchableOpacity>

      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Animated.Image 
            source={source} 
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
  URL:{
    bottom: 140,
    right: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{ rotate: '90deg' }]
  },
  actionButton: {
    position: 'absolute',
    backgroundColor: 'rgb(0, 0, 0)',
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

export default CardScreen;