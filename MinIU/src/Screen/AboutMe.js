import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; // You can use other icon libraries
import logo from '../../assets/logo.png'
const AboutMe = () => {
  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Header */}
      <View style={styles.header}>
        <Image
          source ={logo}// Replace with your app icon
          style={styles.appIcon}
        />
        <Text style={styles.appName}>MinIU</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      {/* App Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Miniu</Text>
        <View style={styles.descriptionItem}>
          <Text style={styles.sectionContent}>
            MinIU is a Mobile Application for Centralizing University Information for Student Support
          </Text>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Purpose:</Text>
          <Text style={styles.infoText}>To centralize and simplify access to university-related information for students.</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Platform:</Text>
          <Text style={styles.infoText}>Mobile (Android, with iOS coming soon)</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Main Goal:</Text>
          <Text style={styles.infoText}>Help students manage academic and campus-related information in one app.</Text>
        </View>
      </View>

      {/* Key Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.featureText}>Centralized university information</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.featureText}>Academic calendar integration</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.featureText}>Campus news and announcements</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.featureText}>Student support resources</Text>
        </View>
      </View>

      {/* Developer Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Developer</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity 
            style={[styles.socialButton, styles.facebook]}
            onPress={() => openURL('https://www.facebook.com/ShiKuu5001')}
          >
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, styles.linkedin]}
            onPress={() => openURL('https://www.linkedin.com/in/minh-ph%C6%B0%C6%A1ng-tr%E1%BA%A7n-0473a0250/')}
          >
            <FontAwesome name="linkedin" size={20} color="white" />
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, styles.instagram]}
            onPress={() => openURL('https://www.instagram.com/shikuu1111/')}
          >
            <FontAwesome name="instagram" size={20} color="white" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, styles.twitter]}
            onPress={() => openURL('https://x.com/CuoiHuong')}
          >
            <FontAwesome name="twitter" size={20} color="white" />
            <Text style={styles.socialText}>Twitter/X</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Miniu App</Text>
        <Text style={styles.footerText}>Designed for university students</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  appIcon: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 15,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3592', // Green color matching the emoji
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3592',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  descriptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  sectionContent: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#c4c9e1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#2c3592',
    marginBottom: 5,
  },
  infoText: {
    color: '#333',
    lineHeight: 20,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  bullet: {
    color: '#2c3592',
    fontSize: 20,
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#444',
    flex: 1,
  },
  socialLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialButton: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  linkedin: {
    backgroundColor: '#0A66C2',
  },
  instagram: {
    backgroundColor: '#E4405F',
  },
  twitter: {
    backgroundColor: '#1DA1F2',
  },
  socialText: {
    marginLeft: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
});

export default AboutMe;