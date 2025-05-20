import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image,TouchableOpacity } from 'react-native';
import axios from 'axios';
import cheerio from 'cheerio-without-node-native';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const StudentInformation = ({route}) => {
  const { studentId } = route.params;
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    if (isFocused) {
      const fetchStudentData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `https://iuoss.com/tcshcd/?table_filter=${studentId}&submit=T%C3%ACm+ki%E1%BA%BFm`,
            { timeout: 10000 } // 10 seconds timeout
          );
          
          if (response.status !== 200) {
            throw new Error(`Server returned status code ${response.status}`);
          }
          
          const $ = cheerio.load(response.data);
          const table = $('table'); 
          
          if (!table.length) {
            throw new Error('No data table found on the page');
          }
          
          // Extract headers
          const headers = [];
          $('thead th', table).each((i, th) => {
            headers.push($(th).text().trim());
          });
          
          // Extract row data
          const rowData = {};
          $('tbody tr:first-child td', table).each((i, td) => {
            if (headers[i]) {
              rowData[headers[i]] = $(td).text().trim();
            }
          });
          
          if (Object.keys(rowData).length === 0) {
            throw new Error('No student data found for the provided ID');
          }
          
          setStudentData(rowData);
        } catch (err) {
          setError(err.message || 'Failed to load student data. Please try again later.');
          setStudentData(null);
        } finally {
          setLoading(false);
        }
      };

      fetchStudentData();
    }
  }, [isFocused, studentId]);

  if (loading) {
    return (
      <View style={[styles.center, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#2c3592" />
        <Text style={styles.loadingText}>Loading student information...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, styles.errorContainer]}>
        <Image 
          source={require('../../assets/error.png')}
          style={styles.errorImage}
        />
        <Text style={styles.errorTitle}>Oops! Something went wrong</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.errorHint}>Please check your internet connection and try again</Text>
        <TouchableOpacity 
          style={styles.errorButton}
          onPress={() => navigation.navigate('MinIU - Home')}
        >
          <Text style={styles.errorButtonText}>Go Back Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Information Table</Text>
      
      {studentData ? (
        <View style={styles.card}>
          <InfoRow label="Student ID" value={studentData['Mã số sinh viên']} />
          <InfoRow label="Full Name" value={studentData['Họ và tên']} />
          <InfoRow label="Study Program (System)" value={studentData['Chương trình\nhọc tập (Hệ)']} />
          <InfoRow label="Course/Batch" value={studentData['Khóa']} />
          
          <Text style={styles.sectionHeader}>SHCD Progress</Text>
          <InfoRow label="First Course" value={studentData['SHCD \nĐầu khóa']} isCheckmark />
          <InfoRow label="Middle Course 1" value={studentData['SHCD \nGiữa khóa\n1']} isCheckmark />
          <InfoRow label="Middle Course 2" value={studentData['SHCD \nGiữa khóa \n2']} isCheckmark />
          <InfoRow label="Last Course" value={studentData['SHCD\n Cuối khóa']} isCheckmark />
          
          <InfoRow label="Result" value={studentData['Kết quả']} highlight />
          <InfoRow label="Academic Status" value={studentData['Tình trạng\nhọc tập']} />
        </View>
      ) : (
        <View style={[styles.center, styles.noDataContainer]}>
          <Image 
            source={require('../../assets/nodata.png')} 
            style={styles.noDataImage}
          />
          <Text style={styles.noDataText}>No student data found for ID: {studentId}</Text>
          <Text style={styles.noDataHint}>Please verify the student ID and try again</Text>
        </View>
      )}
    </ScrollView>
  );
};

const InfoRow = ({ label, value, isCheckmark = false, highlight = false }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={[styles.value, highlight && styles.highlight]}>
      {isCheckmark ? (value === 'x' ? '✓' : '✗') : value || 'N/A'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    backgroundColor: '#f9f9f9',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
  errorContainer: {
    backgroundColor: '#fff0f0',
  },
  errorImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 10,
  },
  errorButton: {
    backgroundColor: '#FF3B30', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  errorButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 10,
  },
  errorHint: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  noDataContainer: {
    backgroundColor: '#f9f9f9',
    marginTop: 50,
  },
  noDataImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
    opacity: 0.6,
  },
  noDataText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 5,
  },
  noDataHint: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3592',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontWeight: '600',
    color: '#555',
    flex: 1,
  },
  value: {
    flex: 1,
    textAlign: 'right',
    color: '#333',
  },
  highlight: {
    color: '#2c3592',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontWeight: 'bold',
    color: '#2c3592',
    marginTop: 15,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default StudentInformation;