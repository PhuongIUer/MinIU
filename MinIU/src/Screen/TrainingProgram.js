import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

// Constants for better organization and maintainability
const MAJOR_ICONS = {
  'Department of Biotechnology': 'biotech',
  'School of Chemical & Environmental Engineering': 'science',
  'School of Civil Engineering and Management': 'architecture',
  'School of Electrical Engineering': 'bolt',
  'Physics and Space Engineering': 'rocket-launch',
  'Industrial Engineering and Logistics Systems': 'factory',
  'School of Computer Science and Engineering': 'computer',
  'Mathematics': 'calculate',
  'School of Business': 'business',
  'School of Biomedical Engineering': 'monitor-heart',
};

const MAJORS = {
  IT: [
    'Bachelor of Engineering of Information Technology (Major: Computer Engineering)',
    'Bachelor of Engineering of Information Technology (Major: Network Engineering)',
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Data Science',
  ],
  BA: [
    'Bachelor of Business Management',
    'Bachelor of International Business',
    'Bachelor of Marketing',
    'Bachelor of Hospitality Management',
    'University of New South Wales (2+2)',
    'Auckland University of Technology (1+2)',
    'Auckland University of Technology (1.5+2.5)',
    'University of West of England (2+2)',
    'University of West of England (4+0)-Business and human resource management',
    'University of West of England (4+0)-Business and management',
    'University of West of England (4+0)-Business management with marketing',
    'University of West of England (4+0)-Business and events management',
    'University of Nottingham (2+2)',
    'University of Houston (2+2)',
    'University of West of England (3+1)',
    'Lakehead University (2+2)',
    'Sydney University (2+2)',
  ],
  BT: [
    'Biotechnology Program',
    'Biochemistry Program',
    'Food Technology Program',
  ],
  CH: [
    'Bachelor of Chemical Engineering',
    'Bachelor of Environment Engineering',
  ],
  CE: [
    'Bachelor of Civil Engineering',
    'Bachelor of Engineering in Construction Management',
    'Deakin University',
  ],
  EE: [
    'Bachelor of Electronics and Telecommunications Engineering',
    'Bachelor of Control Engineering and Automation',
  ],
  PH: [
    'Training Program in Space Engineering (Big Data Analytics and Applications)',
  ],
  IEM: [
    'Intelligent Industrial Systems',
    'Industrial Analytics',
    'Logistics and Supply Chain Management Engineer',
    'Logistics and Supply Chain Analytics',
    'Binghamton University - Industrial and Systems Engineering',
  ],
  MA: [
    'Bachelor of Science in Statistics',
    'Bachelor of Financial Engineering and Risk Management',
  ],
  BM: [
    'Bachelor of Engineering of Biomedical Engineering'
  ]
};

const MAJOR_DATA = [
  { name: 'Department of Biotechnology', majors: MAJORS.BT },
  { name: 'School of Chemical & Environmental Engineering', majors: MAJORS.CH },
  { name: 'School of Civil Engineering and Management', majors: MAJORS.CE },
  { name: 'School of Electrical Engineering', majors: MAJORS.EE },
  { name: 'Physics and Space Engineering', majors: MAJORS.PH },
  { name: 'Industrial Engineering and Logistics Systems', majors: MAJORS.IEM },
  { name: 'School of Computer Science and Engineering', majors: MAJORS.IT },
  { name: 'Mathematics', majors: MAJORS.MA },
  { name: 'School of Business', majors: MAJORS.BA },
  { name: 'School of Biomedical Engineering', majors: MAJORS.BM },
];

const TrainingProgram = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Major Table', { 
        majors: item.majors.map(name => ({ name })), 
        majorName: item.name 
      })}
    >
      <View style={styles.itemContent}>
        <MaterialIcons 
          name={MAJOR_ICONS[item.name] || 'school'} 
          size={28} 
          color="#4e54c8" 
          style={styles.itemIcon} 
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={MAJOR_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

// Using StyleSheet.create for better performance
const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    marginRight: 16,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default TrainingProgram;