// Instruction.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Instruction = ({ visible, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  if (!visible) return null;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageContent = () => {
    switch(currentPage) {
      case 1:
        return {
          title: "Welcome to MiniU",
          content: "Your all-in-one student companion app!\n\nLet's explore the main features.",
          showFeatures: false
        };
      case 2:
        return {
          title: "Quick Access Buttons",
          content: "These buttons give you instant access to key university resources:",
          showFeatures: true,
          features: [
            { icon: 'people', text: 'Lecturers - View faculty members' },
            { icon: 'school', text: 'Training Program - Check your curriculum' },
            { icon: 'description', text: 'Forms - Access important documents' },
            { icon: 'groups', text: 'Clubs - Explore student organizations' },
            { icon: 'map', text: 'Campus Map - Navigate the university' },
            { icon: 'info', text: 'Useful Info - Helpful resources' }
          ]
        };
      case 3:
        return {
          title: "Student ID Lookup",
          content: "Enter your student ID to:\n\n• Decode your faculty/major information\n• Check your SHCD status\n\nExample format: ITICSIU25123",
          showFeatures: false
        };
      case 4:
        return {
          title: "The Main Menu",
          content: "Open the menu in left corner for more function for you to explore.",
        showFeatures: true,
          features: [
            { icon: 'menu', text: 'MinIU - Home' },
          ]
        };
      case 5:
        return {
          title: "Ready to Get Started?",
          content: "You're all set to explore the app!\n\nHope you enjoy using MiniU!",
        showFeatures: false,
        };
      default:
        return {
          title: "",
          content: "",
          showFeatures: false
        };
    }
  };

  const { title, content, showFeatures, features } = getPageContent();

  return (
    <View style={styles.overlay}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={onClose}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{content}</Text>
        
        {showFeatures && features && (
          <View style={styles.featuresContainer}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <MaterialIcons name={feature.icon} size={24} color="#2c3592" />
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.pageIndicator}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.dot, 
                currentPage === index + 1 && styles.activeDot
              ]} 
            />
          ))}
        </View>

        <View style={styles.navigationButtons}>
          {currentPage > 1 && (
            <TouchableOpacity 
              style={[styles.navButton, styles.backButton]} 
              onPress={handleBack}
              activeOpacity={0.7}
            >
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={[styles.navButton, styles.nextButton]} 
            onPress={handleNext}
            activeOpacity={0.7}
          >
            <Text style={styles.navButtonNext}>
              {currentPage < totalPages ? 'Next' : 'Get Started'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: width * 0.85,
    maxWidth: 400,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff4444',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3592',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  featureText: {
    fontSize: 14,
    marginLeft: 15,
    color: '#333',
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#2c3592',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#f0f0f0',
  },
  nextButton: {
    backgroundColor: '#2c3592',
  },
  navButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  navButtonNext: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export default Instruction;