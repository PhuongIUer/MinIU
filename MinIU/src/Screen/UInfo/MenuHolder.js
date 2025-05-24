import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity, Modal, Alert } from 'react-native';
import { GestureHandlerRootView, LongPressGestureHandler, State } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const MenuHolder = ({ route }) => {
  const { store, screenback } = route.params;
  
  const screenWidth = Dimensions.get('window').width;
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [currentActionImage, setCurrentActionImage] = useState(null);
  const longPressRef = useRef(null);
  const navigation = useNavigation();
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const handleLongPress = (image) => {
    setCurrentActionImage(image);
    setActionModalVisible(true);
  };

  const closeActionModal = () => {
    setActionModalVisible(false);
    setCurrentActionImage(null);
  };

  const downloadImage = () => {
    Alert.alert('Info', 'Download functionality is still in development.');
    closeActionModal();
  };

  const onLongPress = (event, image) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      handleLongPress(image);
    }
  };
  const handleBackPress = () => {
    navigation.navigate(screenback);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>


      <ScrollView >
        <View style={styles.titleContainer}>
          <Text style={styles.storeName}>{store.name}</Text>
          <Text style={styles.menuTitle}>MENU</Text>
          <View style={styles.divider} />
        </View>

        {store.menuImages.map((image, index) => (
          <LongPressGestureHandler
            key={index}
            ref={longPressRef}
            onHandlerStateChange={(event) => onLongPress(event, image)}
            minDurationMs={800}
          >
            <TouchableOpacity 
              style={styles.imageContainer}
              onPress={() => handleImagePress(image)}
              activeOpacity={0.8}
            >
              <Image 
                source={image} 
                style={[styles.menuImage, { width: screenWidth - 32 }]} 
                resizeMode="contain" 
              />
            </TouchableOpacity>
          </LongPressGestureHandler>
        ))}

        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            
            <Image
              source={selectedImage}
              style={styles.fullScreenImage}
              resizeMode="contain"
            />
          </View>
        </Modal>

        <Modal
          visible={actionModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeActionModal}
        >
          <View style={styles.actionModalContainer}>
            <View style={styles.actionModalContent}>
              <TouchableOpacity 
                style={styles.actionButton_}
                onPress={downloadImage}
              >
                <Text style={styles.actionButton_Text}>Download Image</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={closeActionModal}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
       </ScrollView>
                 <TouchableOpacity 
                   style={[styles.actionButton, styles.backButton]}
                   onPress={handleBackPress}
                   activeOpacity={0.7}
                 >
                   <Ionicons name="arrow-back" size={24} color="white" />
                 </TouchableOpacity>
       </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  storeName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  divider: {
    height: 3,
    width: 50,
    backgroundColor: '#FF6B6B',
    marginTop: 12,
    borderRadius: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuImage: {
    height: 500,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  actionModalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  actionButton_: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionButton_Text: {
    fontSize: 18,
    textAlign: 'center',
  },
  cancelButton: {
    padding: 15,
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
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

export default MenuHolder;