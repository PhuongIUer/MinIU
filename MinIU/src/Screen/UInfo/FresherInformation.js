import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FresherInformation = () => {
  const name="Fresher Information" 
  const navigation = useNavigation();
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IU Fresher Information</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="schedule" size={24} color="#3498db" />
          <Text style={styles.sectionTitle}>Class Schedule</Text>
        </View>
        
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleSubtitle}>Morning:</Text>
          {['1: 8:00 AM - 8:50 AM', '2: 8:50 AM - 9:40 AM', '3: 9:40 AM - 10:30 AM', 
            '4: 10:35 AM - 11:25 AM', '5: 11:25 AM - 12:15 PM', '6: 12:15 PM - 1:05 PM']
            .map((period, index) => (
              <Text key={index} style={styles.scheduleItem}>• Period {period}</Text>
            ))}
          
          <Text style={[styles.scheduleSubtitle, {marginTop: 10}]}>Afternoon:</Text>
          {['7: 1:15 PM - 2:05 PM', '8: 2:05 PM - 2:55 PM', '9: 2:55 PM - 3:45 PM',
            '10: 3:50 PM - 4:40 PM', '11: 4:40 PM - 5:30 PM', '12: 5:30 PM - 6:20 PM']
            .map((period, index) => (
              <Text key={index} style={styles.scheduleItem}>• Period {period}</Text>
            ))}
          <Text style={styles.scheduleSubtitle}>Link:</Text>
        </View>
        
          <Text style={styles.linkText} onPress={() => openLink('https://edusoftweb.hcmiu.edu.vn/')}>
            Open this link to view your class schedule.
            Link: edusoftweb.hcmiu.edu.vn
          </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="home-work" size={24} color="#e74c3c" />
          <Text style={styles.sectionTitle}>Dormitory (KTX ĐHQG)</Text>
        </View>
        
        <Text style={styles.description}>
          With nearly 35,000 students living and studying here, you are about to embark on a vibrant journey full of academic and personal growth.
        </Text>
        
        <View style={styles.linkItem}>
          <FontAwesome name="facebook" size={20} color="#3b5998" />
          <Text style={styles.linkText} onPress={() => openLink('https://facebook.com/Ktx.DHQG.Sg')}>
            facebook.com/Ktx.DHQG.Sg
          </Text>
        </View>
        
        <View style={styles.linkItem}>
          <Feather name="globe" size={20} color="#2ecc71" />
          <Text style={styles.linkText} onPress={() => openLink('https://www.ktxhcm.edu.vn/')}>
            ktxhcm.edu.vn
          </Text>
        </View>
        
        <Text style={styles.subHeader}>Alternative Accommodation:</Text>
        <View style={styles.linkItem}>
          <Feather name="link" size={18} color="#9b59b6" />
          <Text style={styles.linkText} onPress={() => openLink('https://bit.ly/LxMaia24-25')}>
            Lưu Xá MAIA
          </Text>
        </View>
        <View style={styles.linkItem}>
          <FontAwesome name="facebook" size={18} color="#3b5998" />
          <Text style={styles.linkText} onPress={() => openLink('https://facebook.com/groups/417082985094633')}>
            BCONS Group
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="content-copy" size={24} color="#f39c12" />
          <Text style={styles.sectionTitle}>Photocopy Services</Text>
        </View>
        
        <Text style={styles.locationText}>
          <Text style={{fontWeight: 'bold'}}>Location:</Text> 3rd Floor, Building A1
        </Text>
        <Text style={styles.timeText}>
          <Text style={{fontWeight: 'bold'}}>Open:</Text> 8:00 AM - 5:00 PM
        </Text>
        
        <View style={styles.linkItem}>
          <FontAwesome name="facebook" size={20} color="#3b5998" />
          <Text style={styles.linkText} onPress={() => openLink('https://www.facebook.com/UNIMartstore')}>
            UNI Mart Facebook Page
          </Text>
        </View>
        
        <Text style={styles.subHeader}>Available services:</Text>
        <Text style={styles.listItem}>• Document printing and photocopying</Text>
        <Text style={styles.listItem}>• Snacks and beverages</Text>
        <Text style={styles.listItem}>• School supplies and IU merchandise</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="restaurant" size={24} color="#27ae60" />
          <Text style={styles.sectionTitle}>IU Canteen</Text>
        </View>
        
        <View style={styles.linkItem}>
          <Feather name="globe" size={20} color="#2ecc71" />
          <Text style={styles.linkText} onPress={() => openLink('https://canteen.hcmiu.edu.vn/')}>
            canteen.hcmiu.edu.vn
          </Text>
        </View>
        
        <Text style={styles.description}>
          1600m² space with seven food stations serving breakfast, lunch and beverages. Students can also use the space to study.
        </Text>
        
        <Text style={styles.subHeader}>Additional beverage areas:</Text>
        <Text style={styles.listItem}>• Coffee and smoothies corner on 2nd floor, Block A1</Text>
        <Text style={styles.listItem}>• Soft drinks and snacks on 4th floor, Block A2</Text>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Canteen', { name })}
        >
          <Text style={styles.navButtonText}>View Canteen Details</Text>
          <MaterialIcons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="groups" size={24} color="#8e44ad" />
          <Text style={styles.sectionTitle}>Student Clubs</Text>
        </View>
        
        <Text style={styles.description}>
          IU has a vibrant student life with various clubs catering to different interests. Joining a club is a great way to make friends and develop new skills.
        </Text>
        
        <Text style={styles.subHeader}>Popular Clubs:</Text>
        <Text style={styles.listItem}>• IU Arteam</Text>
        <Text style={styles.listItem}>• IU Guitar Club - IUGC</Text>
        <Text style={styles.listItem}>• Photography Club</Text>
        <Text style={styles.listItem}>• IU Team of Office of Student Affairs - TOSA</Text>
        <Text style={styles.listItem}>• Sports Clubs (Basketball, Badminton, etc.)</Text>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Club')}
        >
          <Text style={styles.navButtonText}>Explore All Clubs</Text>
          <MaterialIcons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="work" size={24} color="#8e44ad" />
          <Text style={styles.sectionTitle}>Job Opportunities</Text>
        </View>
        
        <View style={styles.linkItem}>
          <FontAwesome name="facebook" size={20} color="#3b5998" />
          <Text style={styles.linkText} onPress={() => openLink('https://www.facebook.com/iujobfair')}>
            IU Job Fair Facebook
          </Text>
        </View>
        
        <View style={styles.linkItem}>
          <Feather name="globe" size={20} color="#2ecc71" />
          <Text style={styles.linkText} onPress={() => openLink('https://iujobhub.com/')}>
            iujobhub.com
          </Text>
        </View>
        
        <Text style={styles.subHeader}>Additional platforms:</Text>
        <View style={styles.linkItem}>
          <Feather name="external-link" size={18} color="#3498db" />
          <Text style={styles.linkText} onPress={() => openLink('https://www.topcv.vn/viec-lam')}>
            TopCV
          </Text>
        </View>
        <View style={styles.linkItem}>
          <Feather name="external-link" size={18} color="#3498db" />
          <Text style={styles.linkText} onPress={() => openLink('https://www.linkedin.com/')}>
            LinkedIn
          </Text>
        </View>
        <View style={styles.linkItem}>
          <Feather name="external-link" size={18} color="#3498db" />
          <Text style={styles.linkText} onPress={() => openLink('https://vieclam24h.vn/')}>
            Vieclam24h
          </Text>
        </View>
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
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 15,
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2c3e50',
  },
  scheduleContainer: {
    marginTop: 5,
  },
  scheduleSubtitle: {
    fontWeight: '600',
    color: '#7f8c8d',
    marginTop: 5,
  },
  scheduleItem: {
    marginLeft: 5,
    marginTop: 3,
    color: '#34495e',
  },
  description: {
    color: '#34495e',
    marginBottom: 10,
    lineHeight: 20,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  linkText: {
    color: '#2980b9',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  subHeader: {
    fontWeight: '600',
    color: '#7f8c8d',
    marginTop: 10,
    marginBottom: 5,
  },
  listItem: {
    marginLeft: 5,
    marginBottom: 3,
    color: '#34495e',
  },
  locationText: {
    color: '#34495e',
    marginBottom: 5,
  },
  timeText: {
    color: '#34495e',
    marginBottom: 10,
  },
  navButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default FresherInformation;