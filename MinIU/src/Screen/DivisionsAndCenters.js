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
      title: 'All order room',
      data: [
        { id: 'A1.510', name: 'English Department Office' },
        { id: 'LA1.101', name: 'Structural Mechanics Lab' },
        { id: 'LA1.102', name: 'Food Technology Lab' },
        { id: 'LA1.103', name: 'Construction Materials Lab' },
        { id: 'LA1.104', name: 'High-Quality Training Lab' },
        { id: 'A1.105', name: 'Student Collaboration Room' },
        { id: 'A1.106', name: 'Youth Union Office' },
        { id: 'A1.107', name: 'University Council Meeting Room' },
        { id: 'LA1.108', name: 'Medical Quantum Lab' },
        { id: 'A2.101', name: 'Library Room' },
        { id: 'A2.101A', name: 'Infectious Disease Center' },
        { id: 'A2.102', name: 'HPC Room' },
        { id: 'LA2.105', name: 'Human-Machine Interaction Lab' },
        { id: 'LA2.106', name: 'Product R&D Lab' },
        { id: 'LA2.107', name: 'ISE Lab' },
        { id: 'A2.108', name: 'EE Faculty Staff Room' },
        { id: 'LA2.109', name: 'Microwave Lab' },
        { id: 'A2.111', name: 'Student Association' },
        { id: 'A1.210', name: 'BME Lab' },
        { id: 'A1.209', name: 'Technical Room' },
        { id: 'LA2.201', name: 'Telecommunications Lab' },
        { id: 'LA2.202', name: 'Electronics Lab' },
        { id: 'LA2.203', name: 'Physics Lab' },
        { id: 'A2.204', name: 'Head of EE Department' },
        { id: 'A2.206', name: 'EE Faculty Office' },
        { id: 'LA2.207', name: 'Signal Processing Lab' },
        { id: 'LA2.208', name: 'Embedded Systems Lab' },
        { id: 'LA2.209', name: 'Automation Lab' },
        { id: 'LA2.210', name: 'PLC Lab' },
        { id: 'LA1.301', name: 'Computer Room' },
        { id: 'LA1.302', name: 'Computer Room' },
        { id: 'A1.304', name: 'Hospitality Department' },
        { id: 'A1.305', name: 'Finance Department' },
        { id: 'A1.306', name: 'BA Faculty Office' },
        { id: 'A1.307', name: 'Economic Engineering Department' },
        { id: 'A1.308', name: 'Business Administration Department' },
        { id: 'A1.310', name: 'BA Vice Dean Office' },
        { id: 'A1.311', name: 'Server Room' },
        { id: 'A1.312-313', name: 'IT Service Center' },
        { id: 'A2.303', name: 'Technology Application Center' },
        { id: 'A2.304', name: 'Quality Control Center' },
        { id: 'A2.305', name: 'Medical Room' },
        { id: 'A2.306', name: 'Technical Room' },
        { id: 'LA1.403', name: 'Physics Lab' },
        { id: 'LA1.404', name: 'Regenerative Medicine Lab' },
        { id: 'A1.405', name: 'BME Faculty Office' },
        { id: 'LA1.406', name: 'Medical Equipment Lab' },
        { id: 'LA1.407', name: 'BME Lab' },
        { id: 'LA1.408', name: 'BME Lab' },
        { id: 'A1.410', name: 'Technical Room' },
        { id: 'A1.411', name: 'Professor Toi Office' },
        { id: 'A1.412', name: 'Head of BME Department' },
        { id: 'A1.413', name: 'BME Lab' },
        { id: 'A2.403', name: 'Environmental Science Department' },
        { id: 'LA1.501', name: 'Pharmaceutical Chemistry Lab' },
        { id: 'LA1.502', name: 'Applied Biochemistry Lab' },
        { id: 'A1.503', name: 'Physics Department' },
        { id: 'LA1.504', name: 'Optics Lab' },
        { id: 'LA1.505', name: 'Computer Lab (Construction Department)' },
        { id: 'A1.506', name: 'Physics Department' },
        { id: 'LA1.507', name: 'English Language Lab' },
        { id: 'LA1.508', name: 'English Language Lab' },
        { id: 'LA1.509', name: 'English Language Lab' },
        { id: 'A1.512A', name: 'Head of English Department' },
        { id: 'A1.512B', name: 'Head of Physics Department' },
        { id: 'A1.513', name: 'BME Lab' },
        { id: 'A1.514', name: 'Mr. Thang Office' },
        { id: 'A2.502', name: 'Environmental Science Lab' },
        { id: 'A2.503', name: 'Physical Education Department' },
        { id: 'A2.504', name: 'Physics Department' },
        { id: 'A2.506', name: 'Head of Mathematics Department' },
        { id: 'A2.513', name: 'Environmental Science Department Office' },
        { id: 'A2.514', name: 'Thermal Mechanics Lab' },
        { id: 'LA1.601', name: 'Food Processing Lab' },
        { id: 'LA1.602', name: 'Microbiology & Food Safety Lab' },
        { id: 'LA1.604', name: 'Image Processing Lab' },
        { id: 'A1.605', name: 'Database Systems Lab' },
        { id: 'LA1.606', name: 'Computer Networking Lab' },
        { id: 'LA1.607', name: 'Operating Systems Lab' },
        { id: 'LA1.608', name: 'Software Technology Lab' },
        { id: 'A1.609', name: 'IT Faculty Office' },
        { id: 'A1.610', name: 'IT Faculty Office' },
        { id: 'A1.611', name: 'IT Meeting Room' },
        { id: 'A1.612', name: 'BME Lab' },
        { id: 'A1.613', name: 'Development Planning Office' },
        { id: 'A1.614', name: 'International Training Program Office' },
        { id: 'A2.602', name: 'Faculty of Engineering Technology' },
        { id: 'A2.603', name: 'Faculty of Engineering Technology' },
        { id: 'A2.604', name: 'International Student Office' },
        { id: 'A2.605', name: 'Mr. Chung Office' },
        { id: 'A2.606', name: 'Head of Mathematics Department' },
        { id: 'A2.609', name: 'Graduate Studies Office' },
        { id: 'A2.610', name: 'Mathematics Department' },
        { id: 'A2.611', name: 'Quality Assurance Office' },
        { id: 'A2.612', name: 'Equipment Management Office' },
        { id: 'LA2.613', name: 'Industrial Simulation Lab' },
        { id: 'LA2.614', name: 'Labor Measurement & Production Prototyping Lab' },
        { id: 'LA1.701', name: 'Cell Biotechnology Lab' },
        { id: 'LA1.702', name: 'Biomedical & Molecular Biotechnology Lab' },
        { id: 'A1.703', name: 'Nutritional Biochemistry Lab' },
        { id: 'A1.704', name: 'Aquaculture Department' },
        { id: 'A1.705', name: 'Biotechnology Faculty' },
        { id: 'A1.706', name: 'Biotechnology Faculty' },
        { id: 'A1.707', name: 'Biotechnology Faculty' },
        { id: 'A1.708', name: 'Biotechnology Faculty' },
        { id: 'LA1.709', name: 'Plant Biotechnology Lab' },
        { id: 'LA1.710', name: 'Cell Reprogramming Lab' },
        { id: 'A1.711', name: 'Vice Dean of BT Office' },
        { id: 'LA1.712', name: 'Computational Biology Center' },
        { id: 'A1.713', name: 'Head of BT Department' },
        { id: 'A1.714', name: 'BT Journal Club' },
        { id: 'A2.701', name: 'Finance & Accounting Office' },
        { id: 'A2.702', name: 'Facility Management Office' },
        { id: 'A2.704', name: 'Strategic Planning Office' },
        { id: 'A2.705', name: 'Research Management Office' },
        { id: 'A2.706', name: 'Meeting Room' },
        { id: 'A2.707', name: 'President Office' },
        { id: 'A2.708', name: 'Academic Affairs Office' },
        { id: 'A2.707A', name: 'HR & Administration Office' },
        { id: 'A2.710', name: 'Student Services Office' },
        { id: 'A2.711', name: 'Administrative Services Office' },
        { id: 'A2.712', name: 'Administrative Services Office' },
        { id: 'A2.713', name: 'Vice President Office' },
        { id: 'A2.714', name: 'Vice President Office' }
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