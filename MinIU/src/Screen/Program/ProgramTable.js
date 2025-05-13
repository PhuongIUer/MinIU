import React from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProgramTable = ({ route }) => {
  const navigation = useNavigation();
  const { program, programName, majorName, majors } = route.params;

  const handleBackPress = () => {
    navigation.navigate('Major Table', { 
        majors: majors, 
        majorName: majorName, 
      });
  };

  // Format the data for SectionList
  const formatData = () => {
    return Object.entries(program).map(([semester, courses]) => {
      // Calculate total credits for this semester
      const semesterCredits = courses.reduce((total, course) => total + course.credit, 0);
      
      return {
        title: semester,
        data: courses,
        credits: semesterCredits,
      };
    });
  };

  const renderSectionHeader = ({ section: { title, credits } }) => (
    <View style={styles.semesterHeader}>
      <Text style={styles.semesterHeaderText}>{title}</Text>
      <Text style={styles.semesterCreditsText}>{credits} credits</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseName}>{item.subject}</Text>
      <Text style={styles.creditText}>{item.credit} credits</Text>
    </View>
  );

  const calculateTotalCredits = () => {
    let total = 0;
    Object.values(program).forEach(semester => {
      semester.forEach(course => {
        total += course.credit;
      });
    });
    return total;
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white"/>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.programName}>{programName}</Text>
        <View style={styles.creditContainer}>
          <Text style={styles.totalCredits}>Total Credits: {calculateTotalCredits()}</Text>
          <Text style={styles.creditNote}>* Physical Training does not count toward total credit</Text>
        </View>
      </View>

      <SectionList
        sections={formatData()}
        keyExtractor={(item, index) => item.subject + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={<View style={styles.footer} />}
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
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  majorName: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  programName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  creditContainer: {
    flexDirection: 'column',
  },
  totalCredits: {
    fontSize: 14,
    color: '#4e54c8',
    fontWeight: '600',
  },
  creditNote: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 20,
  },
  semesterHeader: {
    backgroundColor: '#4e54c8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  semesterHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  semesterCreditsText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  courseName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  creditText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginLeft: 16,
  },
  footer: {
    height: 70,
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
});

export default ProgramTable;