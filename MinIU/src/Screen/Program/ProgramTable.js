import React from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProgramTable = ({ route }) => {
  const { program, programName, majorName } = route.params;

  // Format the data for SectionList
  const formatData = () => {
    return Object.entries(program).map(([semester, courses]) => ({
      title: semester,
      data: courses,
    }));
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.semesterHeader}>
      <Text style={styles.semesterHeaderText}>{title}</Text>
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
      <View style={styles.header}>
        <Text style={styles.majorName}>{majorName}</Text>
        <Text style={styles.programName}>{programName}</Text>
        <Text style={styles.totalCredits}>Total Credits: {calculateTotalCredits()}</Text>
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
  totalCredits: {
    fontSize: 14,
    color: '#4e54c8',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 20,
  },
  semesterHeader: {
    backgroundColor: '#4e54c8',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  semesterHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    height: 20,
  },
});

export default ProgramTable;