import { View, Text, StyleSheet, ScrollView, SectionList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProgramTable = ({ route }) => {
  const navigation = useNavigation();
  const { program, programName, majorName, logo } = route.params;

  const handleBackPress = () => {
    navigation.navigate('Major Table', { 
      majorName: majorName, 
      logo: logo
    });
  };

const formatData = () => {
  // First check if program and program.semesters exist
  if (!program || !program.semesters) {
    console.error("Program or semesters data is missing!");
    return []; // Return empty array to prevent crashes
  }

  return program.semesters.map((semester) => {
    let semesterCredits = 0;
    
    if (semester.subjects) { // Check if subjects exist
      semester.subjects.forEach((subject) => {
        semesterCredits += subject.credits || 0; // Fallback to 0 if credits missing
      });
    }
    
    return {
      title: semester.name,
      data: semester.subjects || [], // Fallback to empty array if undefined
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
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.creditText}>{item.credits} credits</Text>
    </View>
  );

  const calculateTotalCredits = () => {
    let total = 0;
    program.semesters.forEach(semester => {
      semester.subjects.forEach(subject => {
        if (subject.name !== 'Physical Training') {
          total += subject.credits;
        }
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
        keyExtractor={(item, index) => item.name + index}
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
    color: '#2c3592',
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
    backgroundColor: '#2c3592',
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

export default ProgramTable;