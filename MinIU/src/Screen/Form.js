import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, SectionList, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Icons for each category
const categoryIcons = {
  'Accident Insurance Forms': 'local-hospital',
  'Health Insurance Forms': 'health-and-safety',
  'Student Accommodation Forms': 'home-work',
  'Student Confirmation Forms': 'assignment-ind',
  'Tuition Fee Reduction Forms': 'school'
};

const FormData = [
  {
    title: "Accident Insurance Forms",
    data: [
      {name: 'Accident Report - Accident Insurance', path: "https://drive.google.com/file/d/1oBtDVCB3ZunRTvczncZK4P2RpmP1G4vP/view?usp=sharing"},
      {name: 'Accident Insurance Claim Form', path: "https://drive.google.com/file/d/1jfbG_-vyIuX2lKBw0Lb7zQ2hvX_Kwp9L/view?usp=drive_link"},
    ]
  },
  {
    title: "Health Insurance Forms",
    data: [
      {name: 'Family Health Insurance Registration Form', path: "https://drive.google.com/file/d/1lgcKDa8ZgUeQDk63eX3siEI-DTzmJj9y/view?usp=drive_link"},
      {name: 'Health Insurance Card Application', path: "https://drive.google.com/file/d/1IU1Pr1F2QleQH_qXNYB4NyzTNL9GjoDf/view?usp=drive_link"},
      {name: 'Health Insurance Information Declaration', path: "https://drive.google.com/file/d/1iR2evoiNB-fBOp8FgPJsSlAVSWAtYFGT/view?usp=drive_link"},
      {name: 'Direct Payment - Health Insurance', path: "https://drive.google.com/file/d/1uUOc8lK-BJ1M0W6saWs8y91zOHZgh0nG/view?usp=drive_link"},
    ]
  },
  {
    title: "Student Accommodation Forms",
    data: [
      {name: 'Residence Notification Form', path: "https://drive.google.com/file/d/1Wh1gPGavSwm5aY1hg-5sAILs518Pl3wi/view?usp=drive_link"},
      {name: 'Off-Campus Accommodation Request', path: "https://drive.google.com/file/d/1yAEQ6rBDntBywvxyjGOeyHIknQhCswWl/view?usp=drive_link"},
      {name: 'Dormitory Leave Request', path: "https://drive.google.com/file/d/1pBD1hslHsYp9-wippSBK0OgblGFVXD8i/view?usp=drive_link"},
      {name: 'Dormitory Registration Request', path: "https://drive.google.com/file/d/1egV-pxXiikho2A2zYzEvbFPNt5tlo45q/view?usp=drive_link"},
    ]
  },
  {
    title: "Student Confirmation Forms",
    data: [
      {name: 'Parent Tax Reduction Request', path: "https://drive.google.com/file/d/1OC9hT-hEt_MzJJ1ZjWriJtkNh6g_1BEc/view?usp=drive_link"},
      {name: 'Tuition Fee Reduction Request', path: "https://drive.google.com/file/d/1qLdPj3yxSjkdDNt0jelczZe-MtIB4T1X/view?usp=drive_link"},
      {name: 'Education Benefits Request', path: "https://drive.google.com/file/d/19d6LXIcRnkDxA-iTq8AocC-fELn5lRRL/view?usp=drive_link"},
      {name: 'English Test Confirmation', path: "https://drive.google.com/file/d/1cetVBLNlTMTgMSqkPfywuGhlKjoc23_p/view?usp=drive_link"},
      {name: 'Revolutionary Family Confirmation', path: "https://drive.google.com/file/d/1--uHEx1OLuWoxFwHCtg3jKZk7fKQn7C_/view?usp=drive_link"},
      {name: 'Military Service Deferment Request', path: "https://drive.google.com/file/d/1M5qhdu0OgRZGsNfH9HG6zP6uLpJJ140D/view?usp=drive_link"},
    ]
  },
  {
    title: "Tuition Fee Reduction Forms",
    data: [
      {name: 'Student Loan Application', path: "https://drive.google.com/file/d/1-cBd69KghNFEOmd1E5s5tb2J5T08FJ0X/view?usp=drive_link"},
      {name: 'Student Loan Application - 2', path: "https://drive.google.com/file/d/1CNQwoXnl6GV7veYwih2wGXozCTpGP9fJ/view?usp=drive_link"},
    ]
  }
];

const Form = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(FormData);
  const [expandedSections, setExpandedSections] = useState({});

  const handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(FormData);
    } else {
      const filtered = FormData.map(section => ({
        ...section,
        data: section.data.filter(item => 
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      })).filter(section => section.data.length > 0);
      setFilteredData(filtered);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => handlePress(item.path)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <TouchableOpacity onPress={() => toggleSection(title)}>
      <LinearGradient
        colors={['#2c3592', '#8f94fb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.sectionHeader}
      >
        <View style={styles.sectionHeaderContent}>
          <MaterialIcons name={categoryIcons[title]} size={24} color="white" />
          <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search forms..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <MaterialIcons name="search" size={24} color="#6c757d" style={styles.searchIcon} />
      </View>

      <SectionList
        sections={filteredData.map(section => ({
          ...section,
          data: expandedSections[section.title] ? section.data : []
        }))}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.name}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    padding: 16,
    marginTop: 0,
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
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
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default Form;