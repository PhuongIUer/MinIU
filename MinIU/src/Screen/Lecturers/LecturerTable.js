import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LecturerCard from './LecturerCard';
import { Ionicons } from '@expo/vector-icons';

const LecturerTable = ({ route }) => {
  const navigation = useNavigation();
  const { lecturers, majorName } = route.params;
  const scrollViewRef = useRef(null);

  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const lecturersPerPage = 10;

  const filteredLecturers = lecturers.filter(lecturer =>
    lecturer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const indexOfLastLecturer = currentPage * lecturersPerPage;
  const indexOfFirstLecturer = indexOfLastLecturer - lecturersPerPage;
  const currentLecturers = filteredLecturers.slice(indexOfFirstLecturer, indexOfLastLecturer);
  const totalPages = Math.ceil(filteredLecturers.length / lecturersPerPage);

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  };

  const handleBackPress = () => {
    navigation.navigate('Lecturers');
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const getPageNumbers = () => {
    let startPage, endPage;
    
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const pageNumbers = getPageNumbers();
  scrollToTop();
  return (
    <View style={styles.screen}>
      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.title}>{majorName} - Lecturers</Text>
        
        <TextInput
          style={styles.searchInput}
          placeholder="🔎 Search by name..."
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            setCurrentPage(1);
            scrollToTop();
          }}
        />
        
        {currentLecturers.length > 0 ? (
          currentLecturers.map((lecturer, index) => (
            <LecturerCard
              key={index}
              name={lecturer.name}
              position={lecturer.position}
              email={lecturer.email}
              office={lecturer.office}
              imageUrl={lecturer.imageUrl}
            />
          ))
        ) : (
          <Text style={styles.noResults}>No lecturers found</Text>
        )}

        {filteredLecturers.length > lecturersPerPage && (
          <View style={styles.paginationContainer}>
            <TouchableOpacity 
              onPress={goToPrevPage} 
              disabled={currentPage === 1}
              style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
            >
              <Text style={styles.pageButtonText}>Previous</Text>
            </TouchableOpacity>

            {pageNumbers.map(page => (
              <TouchableOpacity
                key={page}
                onPress={() => goToPage(page)}
                style={[styles.pageNumber, currentPage === page && styles.activePage]}
              >
                <Text style={[styles.pageNumberText, currentPage === page && styles.activePageText]}>{page}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity 
              onPress={goToNextPage} 
              disabled={currentPage === totalPages}
              style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
            >
              <Text style={styles.pageButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
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
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  pageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  pageButtonText: {
    color: 'white',
    fontSize: 14,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  pageNumber: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  activePage: {
    backgroundColor: '#007bff',
  },
  pageNumberText: {
    color: '#333',
    fontSize: 14,
  },
  activePageText: {
    color: 'white',
  },
});

export default LecturerTable;