import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, TextInput, TouchableOpacity, Alert, Linking, ScrollView, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const footerPosition = React.useRef(new Animated.Value(0)).current;
  const [studentId, setStudentId] = useState('');
  const [decodedInfo, setDecodedInfo] = useState(null);
  const navigation = useNavigation();
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  let stateCard = false;
  React.useEffect(() => {
    Animated.timing(footerPosition, {
      toValue: -40,
      duration: 800,
      useNativeDriver: true,
    }).start();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        animateFooter(100); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        if (!stateCard) {
        animateFooter(-40); }
      }
    );
    if (decodedInfo) animateFooter(100); 
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const facultyData = {
    'BE': { name: 'Biomedical Engineering' },
    'BT': { name: 'Biotechnology' },
    'CE': { name: 'Civil Engineering' },
    'EE': { name: 'Electrical Engineering' },
    'EN': { name: 'Engineering' },
    'EV': { name: 'Environmental Engineering' },
    'IE': { name: 'Industrial Engineering and Logistics Systems' },
    'IT': { name: 'Information Technology' },
    'MA': { name: 'Mathematics' },
    'SE': { name: 'Space Engineering' },
    'BA': { name: 'School of Business' },
  };
  const majorData = {
    'AC': { name: 'Accounting' },
    'BA': { name: 'Business Administration' },
    'FN': { name: 'Finance' },
    'BE': { name: 'Biomedical Engineering' },
    'BC': { name: 'Bioengineering' },
    'BT': { name: 'Biotechnology' },
    'FT': { name: 'Food Technology' },
    'CE': { name: 'Civil Engineering' },
    'CM': { name: 'Construction Management' },
    'AE': { name: 'Automation and Control Engineering' },
    'EE': { name: 'Electrical Engineering' },
    'EN': { name: 'Engineering' },
    'EV': { name: 'Environmental Engineering' },
    'IE': { name: 'Industrial Engineering' },
    'LS': { name: 'Logistics and Supply Chain' },
    'CS': { name: 'Computer Science' },
    'DS': { name: 'Data Science' },
    'IT': { name: 'Information Technology' },
    'MA': { name: 'Applied Mathematics' },
    'SE': { name: 'Space Engineering' },
  };
  const programData = {
    'AU': { name: 'Australia Program' },
    'DK': { name: 'Deakin University' },
    'IU': { name: 'International University' },
    'NS': { name: 'Ngân hàng (Banking University)' },
    'SB': { name: 'SUNY Binghamton' },
    'UH': { name: 'University of Houston' },
    'WE': { name: 'University of the West of England' },
  };
  const animateFooter = (toValue) => {
    Animated.timing(footerPosition, {
      toValue,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const validateStudentId = (id) => {
    const regex = /^([A-Z]{2})([A-Z]{2})([A-Z]{2})(\d{2})(\d{3})$/;
    return regex.test(id);
  };

  const decodeStudentId = (id) => {
    if (!validateStudentId(id)) {
      Alert.alert('Invalid ID', 'Student ID must be in the format like ITICSIU25123');
      return null;
    }

    const facultyCode = id.substring(0, 2); 
    const majorCode = id.substring(2, 4);  
    const programCode = id.substring(4, 6); 
    const yearCode = id.substring(6, 8);    
    const studentNumber = id.substring(8);  

    const facultyInfo = facultyData[facultyCode] || { name: 'Unknown Faculty' };
    const majorInfo = majorData[majorCode] || { name: 'Unknown Major' };
    const programInfo = programData[programCode] || { name: 'Unknown Program' };

    return {
      breakdown: [
        { code: facultyCode, description: facultyInfo.name },
        { code: majorCode, description: majorInfo.name },
        { code: programCode, description: programInfo.name },
        { code: yearCode, description: `K${yearCode}` },
        { code: studentNumber, description: `ID ${studentNumber}` }
      ],
      faculty: facultyInfo.name,
      major: majorInfo.name,
      program: programInfo.name,
      enrollmentYear: `20${yearCode}`,
      studentNumber,
    };
  };

  const handleLookup = () => {
    animateFooter(100);
    const info = decodeStudentId(studentId);
    setDecodedInfo(info);
    stateCard = true;
  };

  const handleOpenLink = () => {
    handleLookup()
    if (!studentId) {
      Alert.alert('Error', 'Please enter a student ID first');
      return;
    }
    navigation.navigate('Student Information',{studentId : studentId});
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.gridContainer}>
          <View style={styles.gridRow}>
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen('Lecturers')}
            >
              <MaterialIcons name="people" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Lecturers</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen('Training Program')}
            >
              <MaterialIcons name="school" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Training Program</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen('Form')}
            >
              <MaterialIcons name="description" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Form</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.gridRow}>
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen('Club')}
            >
              <MaterialIcons name="groups" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Club</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen('Campus Map')}
            >
              <MaterialIcons name="map" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Campus Map</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.gridButton} 
              onPress={() => navigateToScreen("Useful Information")}
            >
              <MaterialIcons name="info" size={24} color="#2c3592" />
              <Text style={styles.gridButtonText}>Useful Information</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your student ID</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="badge" size={24} color="#2c3592" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="e.g., ITICSIU25123"
                placeholderTextColor="#999"
                value={studentId}
                onChangeText={setStudentId}
                autoCapitalize="characters"
                maxLength={11}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLookup}>
            <Text style={styles.buttonText}>Lookup Information</Text>
            <MaterialIcons name="search" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ top: 10 }}>
          <TouchableOpacity 
            style={[styles.button, styles.linkButton]} 
            onPress={handleOpenLink}
          >
            <Text style={styles.buttonText}>Open Student's SHCD status</Text>
            <MaterialIcons name="open-in-new" size={24} color="white" />
          </TouchableOpacity>
          </View>
        </View>

        {decodedInfo && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Student Information</Text>

            <View style={styles.section}>
              <View style={styles.infoItem}>
                <MaterialIcons name="book" size={20} color="#2c3592" />
                <Text style={styles.infoText}>Faculty: {decodedInfo.faculty}</Text>
              </View>
              
              <View style={styles.infoItem}>
                <MaterialIcons name="bookmarks" size={20} color="#2c3592" />
                <Text style={styles.infoText}>Major: {decodedInfo.major}</Text>
              </View>
              
              <View style={styles.infoItem}>
                <MaterialIcons name="school" size={20} color="#2c3592" />
                <Text style={styles.infoText}>Program: {decodedInfo.program}</Text>
              </View>
              
              <View style={styles.infoItem}>
                <MaterialIcons name="calendar-today" size={20} color="#2c3592" />
                <Text style={styles.infoText}>Enrollment Year: {decodedInfo.enrollmentYear}</Text>
              </View>
              
              <View style={styles.infoItem}>
                <MaterialIcons name="tag" size={20} color="#2c3592" />
                <Text style={styles.infoText}>Student Number: {decodedInfo.studentNumber}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <Animated.View 
        style={[
          styles.footerContainer,
          {
            transform: [{ translateY: footerPosition }]
          }
        ]}
      >
        <Image 
          source={require('../../assets/footer.png')} 
          style={styles.Footer}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  gridContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridButton: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  gridButtonText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#2c3592',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    top: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#2c3592',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  resultCard: {
    top: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3592',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  footerContainer: {
    position: 'absolute',
    bottom: -80,
    width: '100%',
    alignItems: 'center',
  },
  footerImage: {
    bottom:-170,
    width: '100%',
    height: 200,
  },
  Footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 200,
  },
});

export default Home;