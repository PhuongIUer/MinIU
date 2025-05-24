import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Support = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:+842837244270,,3334');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:oss@hcmiu.edu.vn');
  };

  const mapEmbedHTML = `
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12407.261696093714!2d106.8060391!3d10.881318949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415a9d221%3A0x550c2b41569376f9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBRdeG7kWMgVOG6vyAtIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e1!3m2!1svi!2s!4v1747299480703!5m2!1svi!2s" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Information</Text>
      </View>

      <View style={styles.mapContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: mapEmbedHTML }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <MaterialIcons name="location-on" size={24} color="#2c3592" />
          <Text style={styles.sectionTitle}>Address</Text>
        </View>
        <Text style={styles.contentText}>
          International University - Vietnam National University HCM City
        </Text>
        <Text style={styles.detailText}>
          Room O1.105, Quarter 6, Linh Trung Ward, Thu Duc City, HCM
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <MaterialIcons name="phone" size={24} color="#2c3592" />
          <Text style={styles.sectionTitle}>Phone</Text>
        </View>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={[styles.contentText, styles.linkText]}>
            (+84) 028 3724 4270 ext: 3334, 3826
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.section}>
          <MaterialIcons name="email" size={24} color="#2c3592" />
          <Text style={styles.sectionTitle}>Email</Text>
        </View>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.contentText, styles.linkText]}>oss@hcmiu.edu.vn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3592',
  },
  mapContainer: {
    height: 250,
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3592',
    marginLeft: 10,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  linkText: {
    color: '#1565C0',
    textDecorationLine: 'underline',
  },
});

export default Support;