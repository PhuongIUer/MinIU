import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList, TextInput } from 'react-native';

const DivisionsAndCenters = () => {
  const campusData = [
    {
      title: 'Academic Departments',
      data: [
        { id: 'A2.204', name: 'Dean of Electrical Engineering (EE)' },
        { id: 'A1.306', name: 'Faculty of Business Administration (BA) Office' },
        { id: 'A1.405', name: 'Faculty of Biomedical Engineering (BME) Office' },
        { id: 'A1.609-610', name: 'Faculty of Information Technology (IT) Office' },
        { id: 'A1.705-708', name: 'Faculty of Biotechnology (BT)' },
        { id: 'A2.403', name: 'Environmental Engineering Department' },
        { id: 'A1.503/506', name: 'Physics Department' },
        { id: 'A2.506/610', name: 'Mathematics Department' },
        { id: 'A1.510', name: 'English Department Office' },
      ],
    },
    {
      title: 'Research Laboratories',
      data: [
        { id: 'LA1.101', name: 'Structural Mechanics Lab' },
        { id: 'LA1.102', name: 'Food Technology Lab' },
        { id: 'LA2.201', name: 'Telecommunications Lab' },
        { id: 'LA2.202', name: 'Electronics Lab' },
        { id: 'LA1.701', name: 'Cell Biotechnology Lab' },
        { id: 'LA2.613', name: 'Industrial Simulation Lab' },
        { id: 'LA1.604', name: 'Image Processing Lab' },
        { id: 'LA1.606', name: 'Computer Network Lab' },
        { id: 'LA1.403', name: 'Physics Lab' },
      ],
    },
    {
      title: 'Administrative Offices',
      data: [
        { id: 'A2.707', name: 'Rector Office' },
        { id: 'A2.713-714', name: 'Vice Rector Offices' },
        { id: 'A2.101', name: 'Library' },
        { id: 'A1.105', name: 'Student Affairs Office' },
        { id: 'A1.106', name: 'Youth Union Office' },
        { id: 'A2.708', name: 'Academic Affairs Office' },
        { id: 'A2.701', name: 'Finance Office' },
      ],
    },
    {
      title: 'Special Centers',
      data: [
        { id: 'A2.303', name: 'Career Guidance Center' },
        { id: 'A1.312-313', name: 'IT Service Center' },
        { id: 'A2.305', name: 'Medical Center' },
        { id: 'LA1.712', name: 'Computational Biology Center' },
        { id: 'A2.609', name: 'Graduate Studies Office' },
        { id: 'A2.604', name: 'International Student Office' },
      ],
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(campusData);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredData(campusData);
    } else {
      const filtered = campusData.map(section => ({
        ...section,
        data: section.data.filter(item => 
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.id.toLowerCase().includes(text.toLowerCase())
        )
      })).filter(section => section.data.length > 0);
      setFilteredData(filtered);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by room name or ID..."
          value={searchText}
          onChangeText={handleSearch}
          placeholderTextColor="#999"
        />
      </View>
      
      <ScrollView style={styles.container}>
        {filteredData.length > 0 ? (
          <SectionList
            sections={filteredData}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemId}>{item.id}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No matching results found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#2e86de',
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#2e86de',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eaeaea',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 6,
    color: '#333',
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2e86de',
  },
  itemId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e86de',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
  },
});

export default DivisionsAndCenters;