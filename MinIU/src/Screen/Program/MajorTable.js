import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

// Constants for better organization
const MAJOR_ICONS = {
  'School of Biomedical Engineering': 'biotech',
  'School of Chemical & Environmental Engineering': 'science',
  'School of Civil Engineering and Management': 'architecture',
  'School of Electrical Engineering': 'bolt',
  'Physics and Space Engineering': 'rocket-launch',
  'Industrial Engineering and Logistics Systems': 'factory',
  'School of Computer Science and Engineering': 'computer',
  'Mathematics': 'calculate',
  'School of Business': 'business',
};
const PROGRAMS = {
  IT: {
    'Bachelor of Engineering of Information Technology (Major: Computer Engineering)':{
      'Semester 1': [
        {subject:'Calculus 1', credit:4},
        {subject:'Physical Training 1', credit:3},
        {subject:'Listening AE1', credit:2},
        {subject:'Writing AE1', credit:2},
        {subject:'Introduction to Computing', credit:3},
        {subject:'C/C++ Programming', credit:4},
      ],
      'Semester 2': [
        {subject:'Discrete Mathematics', credit:3},
        {subject:'Digital Logic Design', credit:3},
        {subject:'Digital Logic Design Laboratory', credit:1},
        {subject:'Speaking AE2', credit:2},
        {subject:'Writing AE2', credit:2},
        {subject:'Object-Oriented Programming', credit:4},
        {subject:'Physics 1', credit:2},
      ],
      'Semester 3': [
        {subject:'Linear algebra', credit:3},
        {subject:'Calculus 2', credit:4},
        {subject:'Algorithms and Data Structures', credit:4},
        {subject:'Principle of Electrical Engineering I', credit:3},
        {subject:'Marxist - Leninist Political Economy', credit:2},
        {subject:'Principle of Electrical Engineering I Laboratory', credit:1},
        {subject:'Philosophy Marx - Lenin', credit:3},
      ],
      'Semester 4': [
        {subject:'Computer Architecture', credit:4},
        {subject:'Computer Networks', credit:4},
        {subject:'Electronic Devices', credit:3},
        {subject:'Probability, Statistic & Random Process', credit:3},
        {subject:'Scientific Socialism', credit:2},
        {subject:'Electronic Devices Laboratory', credit:1},
      ],
      'Semester 5': [
        {subject:'Operating System', credit:4},
        {subject:'Principles of Database Management', credit:4},
        {subject:'Micro-processing Systems', credit:3},
        {subject:'Physical Training 2', credit:3},
        {subject:'Physics 3', credit:3},
        {subject:'Physics 3 Laboratory', credit:1},
        {subject:'Micro-processing Systems Laboratory', credit:1},
      ],
      'Semester 6': [
        {subject:'Elective 1', credit:4},
        {subject:'Digital System Design', credit:3},
        {subject:'Digital System Design Laboratory', credit:1},
        {subject:'History of Vietnamese Communist Party', credit:2},
        {subject:'Ho Chi Minh\'s Thoughts', credit:2},
        {subject:'Embedded Systems', credit:4},
        {subject:'Embedded Systems Laboratory', credit:1},
      ],
      'Summer Semester': [
        {subject:'Internship for engineers', credit:7},
      ],
      'Semester 7': [
        {subject:'Elective 2', credit:4},
        {subject:'Concepts in VLSI Design', credit:4},
        {subject:'Concepts in VLSI Design Laboratory', credit:1},
        {subject:'Digital Signal Processing', credit:4},
        {subject:'Artificial intelligence', credit:4},
      ],
      'Semester 8': [
        {subject:'Special Study of the Field', credit:3},
        {subject:'Internet of Things', credit:4},
        {subject:'Entrepreneurship', credit:3},
        {subject:'Engineering Ethics and Professional Skills', credit:3},
      ],
      'Semester 9': [
        {subject:'Thesis', credit:10},
        {subject:'General Law', credit:3},
      ],
    },
    'Bachelor of Engineering of Information Technology (Major: Network Engineering)':{
      'Semester 1': [
        {subject:'Calculus 1', credit:4},
        {subject:'Physical Training 1', credit:3},
        {subject:'Listening AE1', credit:2},
        {subject:'Writing AE1', credit:2},
        {subject:'Introduction to Computing', credit:3},
        {subject:'C/C++ Programming', credit:4},
      ],
      'Semester 2': [
        {subject:'Discrete Mathematics', credit:3},
        {subject:'Digital Logic Design', credit:3},
        {subject:'Digital Logic Design Laboratory', credit:1},
        {subject:'Speaking AE2', credit:2},
        {subject:'Writing AE2', credit:2},
        {subject:'Object-Oriented Programming', credit:4},
        {subject:'Physics 1', credit:2},
      ],
      'Semester 3': [
        {subject:'Linear algebra', credit:3},
        {subject:'Calculus 2', credit:4},
        {subject:'Algorithms and Data Structures', credit:4},
        {subject:'Principle of Electrical Engineering I', credit:3},
        {subject:'Marxist - Leninist Political Economy', credit:2},
        {subject:'Principle of Electrical Engineering I Laboratory', credit:1},
        {subject:'Philosophy Marx - Lenin', credit:3},
      ],
      'Semester 4': [
        {subject:'Computer Architecture', credit:4},
        {subject:'Computer Networks', credit:4},
        {subject:'Web Application Development', credit:3},
        {subject:'Probability, Statistic & Random Process', credit:3},
        {subject:'Scientific Socialism', credit:2},
      ],
      'Semester 5': [
        {subject:'Operating System', credit:4},
        {subject:'Net-Centric Programming', credit:4},
        {subject:'System & Network Administration', credit:3},
        {subject:'Physical Training 2', credit:3},
        {subject:'Physics 3', credit:3},
        {subject:'Physics 3 Laboratory', credit:1},
      ],
      'Semester 6': [
        {subject:'Elective 1', credit:4},
        {subject:'Information System Management', credit:4},
        {subject:'System and Network Security', credit:4},
        {subject:'History of Vietnamese Communist Party', credit:2},
        {subject:'Ho Chi Minh\'s Thoughts', credit:2},
      ],
      'Summer Semester': [
        {subject:'Internship for engineers', credit:7},
      ],
      'Semester 7': [
        {subject:'Elective 2', credit:4},
        {subject:'Entrepreneurship', credit:3},
        {subject:'Scalable and Distributed Computing', credit:4},
        {subject:'Artificial intelligence', credit:4},
      ],
      'Semester 8': [
        {subject:'Elective 3', credit:4},
        {subject:'Internet of Things', credit:4},
        {subject:'Special Study of the Field', credit:3},
        {subject:'Engineering Ethics and Professional Skills', credit:3},
      ],
      'Semester 9': [
        {subject:'Thesis', credit:10},
        {subject:'General Law', credit:3},
      ],
    },
    'Bachelor of Science in Computer Science':{
      'Semester 1': [
        {subject:'Calculus 1', credit:4},
        {subject:'Physics 1', credit:3},
        {subject:'Listening AE1', credit:2},
        {subject:'Writing AE1', credit:2},
        {subject:'Introduction to Computing', credit:3},
        {subject:'C/C++ Programming', credit:4},
      ],
      'Semester 2': [
        {subject:'Discrete Mathematics', credit:3},
        {subject:'Physics 3 Laboratory', credit:1},
        {subject:'Computer Networks', credit:4},
        {subject:'Speaking AE2', credit:2},
        {subject:'Writing AE2', credit:2},
        {subject:'Object-Oriented Programming', credit:4},
        {subject:'Physics 3', credit:3},
      ],
      'Semester 3': [
        {subject:'Linear algebra', credit:3},
        {subject:'Calculus 2', credit:4},
        {subject:'Algorithms and Data Structures', credit:4},
        {subject:'Principle of Electrical Engineering I', credit:3},
        {subject:'Marxist - Leninist Political Economy', credit:2},
        {subject:'Principle of Electrical Engineering I Laboratory', credit:1},
        {subject:'Philosophy Marx - Lenin', credit:3},
      ],
      'Semester 4': [
        {subject:'Computer Architecture', credit:4},
        {subject:'Physical Training 1', credit:3},
        {subject:'Elective 1', credit:4},
        {subject:'Object-Oriented Analysis and Design', credit:4},
        {subject:'Web Application Development', credit:4},
      ],
      'Semester 5': [
        {subject:'Probability, Statistic & Random Process', credit:3},
        {subject:'Scientific Socialism', credit:2},
        {subject:'Principles of Programming Languages', credit:4},
        {subject:'Physical Training 2', credit:3},
        {subject:'Elective 2', credit:4},
        {subject:'Elective 3', credit:4},
      ],
      'Semester 6': [
        {subject:'Software Engineering', credit:4},
        {subject:'Artificial Intelligence', credit:4},
        {subject:'General law', credit:3},
        {subject:'History of Vietnamese Communist Party', credit:2},
        {subject:'Free elective', credit:3},
        {subject:'Entrepreneurship', credit:3},
      ],
      'Summer Semester': [
        {subject:'Internship', credit:3},
      ],
      'Semester 7': [
        {subject:'Operating Systems', credit:4},
        {subject:'Ho Chi Minh\'s Thoughts', credit:2},
        {subject:'Special Study of the Field', credit:3},
      ],
      'Semester 8': [
        {subject:'Thesis', credit:10},
      ],
    },
    'Bachelor of Science in Data Science':{
      'Semester 1': [
        {subject:'Calculus 1', credit:4},
        {subject:'Fundamentals of Programming', credit:4},
        {subject:'Listening AE1', credit:2},
        {subject:'Writing AE1', credit:2},
        {subject:'Introduction to Data Science', credit:3},
      ],
      'Semester 2': [
        {subject:'Probability, Statistic & Random Process', credit:2},
        {subject:'Linear Algebra', credit:3},
        {subject:'Philosophy Marx -Lenin', credit:4},
        {subject:'Speaking AE2', credit:2},
        {subject:'Writing AE2', credit:2},
        {subject:'Object-Oriented Programming', credit:4},
      ],
      'Semester 3': [
        {subject:'Statistical Method', credit:3},
        {subject:'Data Structures and Algorithms', credit:4},
        {subject:'Principles of Database Management', credit:4},
        {subject:'Fundamental Concepts of Data Security', credit:4},
        {subject:'Marxist - Leninist Political Economy', credit:2},
      ],
      'Semester 4': [
        {subject:'Scientific Socialism', credit:2},
        {subject:'Physical Training 1', credit:3},
        {subject:'General law', credit:3},
        {subject:'Artificial Intelligence', credit:4},
        {subject:'Statistical Learningt', credit:4},
        {subject:'Regression Analysis', credit:4},
      ],
      'Semester 5': [
        {subject:'History of Vietnamese Communist Party', credit:2},
        {subject:'Data Science and Data Visualization', credit:4},
        {subject:'Data Mining', credit:4},
        {subject:'Scalable and Distributed Computing', credit:4},
        {subject:'Data Analysis', credit:4},
      ],
      'Semester 6': [
        {subject:'Ho Chi Minh\'s Thoughts', credit:2},
        {subject:'Machine Learning', credit:4},
        {subject:'Deep Learning', credit:4},
        {subject:'Elective', credit:4},
        {subject:'Elective', credit:4},
      ],
      'Summer Semester': [
        {subject:'Internship', credit:3},
      ],
      'Semester 7': [
        {subject:'Elective 3', credit:4},
        {subject:'Internet of Things', credit:4},
        {subject:'FEngineering Ethics and Professional Skills', credit:3},
        {subject:'Special Study of the Field', credit:3},
      ],
      'Semester 8': [
        {subject:'Thesis', credit:10},
      ],
    },
  },
}
const MajorTable = ({ route }) => {
  const navigation = useNavigation();
  const { majors, majorName } = route.params;

  const handleProgramPress = (programName) => {
    // Find the program data based on the program name
    const programData = PROGRAMS.IT[programName] || {};
    navigation.navigate('Program Table', { 
      program: programData,
      programName: programName,
      majorName: majorName,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => handleProgramPress(item.name)}
    >
      <View style={styles.itemContent}>
        <MaterialIcons 
          name={MAJOR_ICONS[majorName] || 'school'} 
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
        data={majors}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <Text style={styles.header}>{majorName}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
    paddingBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
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

export default MajorTable;