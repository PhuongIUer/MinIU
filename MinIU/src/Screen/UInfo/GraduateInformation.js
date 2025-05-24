import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const GraduateInformation = () => {
  const navigation = useNavigation();
  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  const programs = [
    { id: 1, name: 'Business Administration', credits: 60, program: 'Applied 2 & Research 2' },
    { id: 2, name: 'Biotechnology', credits: 60, program: 'Research 1 & 2' },
    { id: 3, name: 'Electrical Engineering', credits: 60, program: 'Research 2 & Applied 2' },
    { id: 4, name: 'Industrial Systems Engineering', credits: 60, program: 'Applied 1 & Research 2' },
    { id: 5, name: 'Biomedical Engineering', credits: 60, program: 'Research 1 & 2' },
    { id: 6, name: 'Public Administration (Vietnamese)', credits: 60, program: 'Research 2' },
    { id: 7, name: 'Food Technology', credits: 60, program: 'Research 1 & 2' },
    { id: 8, name: 'IT Management (Vietnamese)', credits: 61, program: 'Applied 1' },
    { id: 9, name: 'Logistics & Supply Chain Management', credits: 60, program: 'Applied 1' },
    { id: 10, name: 'Information Technology', credits: 63, program: 'Applied 1 & Research 2' },
    { id: 11, name: 'Civil Engineering', credits: 60, program: 'Applied 1 & Research 2' },
  ];

  const supplementaryFees = [
    { id: 1, program: 'Business Administration', fee: '2,400,000 VND' },
    { id: 2, program: 'Public Administration', fee: '2,500,000 VND' },
    { id: 3, program: 'Biomedical Engineering', fee: '2,000,000 VND' },
    { id: 4, program: 'Food Technology', fee: '5,300,000 VND' },
    { id: 5, program: 'Industrial Systems Engineering', fee: '3,200,000 VND' },
    { id: 6, program: 'Electrical Engineering', fee: '4,000,000 VND' },
    { id: 7, program: 'IT Management', fee: '5,300,000 VND' },
    { id: 8, program: 'Logistics & Supply Chain', fee: '4,800,000 VND' },
    { id: 9, program: 'Civil Engineering', fee: '11,880,000 VND' },
    { id: 10, program: 'Information Technology', fee: '5,300,000 VND' },
  ];

  return (
    <View style={styles.container}>
    <ScrollView>
      {/* General Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. General Information</Text>
        <Text style={styles.text}>
          International University (IU) under Vietnam National University Ho Chi Minh City (VNU-HCM) was established in 2003 as the first public university in Vietnam offering undergraduate and graduate programs taught entirely in English using international-standard curricula.
        </Text>
        <Text style={styles.text}>
          IU is one of seven universities in Vietnam recognized by the Ministry of Education and Training as meeting international quality standards. The university currently offers 11 Master's programs:
        </Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.headerCell, {flex: 0.5}]}>No.</Text>
            <Text style={[styles.tableCell, styles.headerCell, {flex: 2}]}>Program</Text>
            <Text style={[styles.tableCell, styles.headerCell, {flex: 1}]}>Credits</Text>
            <Text style={[styles.tableCell, styles.headerCell, {flex: 1.5}]}>Program Type</Text>
          </View>
          {programs.map(item => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.tableCell, {flex: 0.5}]}>{item.id}</Text>
              <Text style={[styles.tableCell, {flex: 2}]}>{item.name}</Text>
              <Text style={[styles.tableCell, {flex: 1}]}>{item.credits}</Text>
              <Text style={[styles.tableCell, {flex: 1.5}]}>{item.program}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Admission Methods */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Admission Methods & Eligibility</Text>
        <Text style={styles.subsectionTitle}>2.1 Admission Methods</Text>
        <Text style={styles.text}>- Document-based evaluation</Text>
        
        <Text style={styles.subsectionTitle}>2.2 Eligibility</Text>
        <Text style={styles.subsectionTitle}>a. Direct Admission:</Text>
        <Text style={styles.text}>
          Applicants must hold a bachelor's degree in a relevant field with English proficiency as specified by IU, including:
        </Text>
        <Text style={styles.listItem}>- Graduated from a 150+ credit program on time</Text>
        <Text style={styles.listItem}>- Graduated with honors (GPA ≥ 8.0/10)</Text>
        <Text style={styles.listItem}>- Valedictorian of the department</Text>
        <Text style={styles.listItem}>- National/international competition winners</Text>
        <Text style={styles.note}>Note: Direct admission must be within 24 months of graduation.</Text>
        
        <Text style={styles.subsectionTitle}>b. Regular Admission:</Text>
        <Text style={styles.listItem}>- Bachelor's degree in relevant field</Text>
        <Text style={styles.listItem}>- Participants in IU's articulation programs</Text>
        <Text style={styles.listItem}>- International students with relevant degrees</Text>
      </View>

      {/* English Requirements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. English Proficiency Requirements</Text>
        <Text style={styles.text}>Applicants must provide one of:</Text>
        <Text style={styles.listItem}>- Degree from English-taught program abroad</Text>
        <Text style={styles.listItem}>- English language degree</Text>
        <Text style={styles.listItem}>- English certificate (level 3/4 on Vietnamese 6-level framework, valid for 2 years)</Text>
      </View>

      {/* Supplementary Courses */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Supplementary Courses</Text>
        <Text style={styles.text}>
          Applicants with unrelated bachelor's degrees must complete prerequisite courses before admission.
        </Text>
        <View style={styles.linkContainer}>
          <MaterialIcons name="link" size={16} color="#1e90ff" />
          <Text style={styles.linkText} onPress={() => openWebsite('https://oga.hcmiu.edu.vn/lop-bo-sung-kien-thuc')}>
            Supplementary Course Information
          </Text>
        </View>
      </View>

      {/* Application Documents */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Application Documents</Text>
        <Text style={styles.listItem}>- Application form with photo</Text>
        <Text style={styles.listItem}>- Curriculum vitae</Text>
        <Text style={styles.listItem}>- 2 notarized bachelor's degree copies</Text>
        <Text style={styles.listItem}>- 2 official transcripts</Text>
        <Text style={styles.listItem}>- Professional portfolio</Text>
        <Text style={styles.listItem}>- Recommendation letters</Text>
        <Text style={styles.listItem}>- 3 passport photos (3x4cm)</Text>
        <Text style={styles.listItem}>- English certificate (if any)</Text>
        <Text style={styles.listItem}>- ID card copy</Text>
        <Text style={styles.note}>Note: All documents must be A4 size.</Text>
      </View>

      {/* Admission Process */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Admission Process</Text>
        <Text style={styles.listItem}>1. Submit complete application</Text>
        <Text style={styles.listItem}>2. Complete supplementary courses (if required)</Text>
        <Text style={styles.listItem}>3. Document evaluation</Text>
        <Text style={styles.listItem}>4. Admission results announcement</Text>
      </View>

      {/* Fees */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>7. Fees</Text>
        <Text style={styles.text}>- Direct admission: 60,000 VND</Text>
        <Text style={styles.text}>- Regular admission: 300,000 VND</Text>
        <Text style={styles.subsectionTitle}>Supplementary Course Fees:</Text>
        
        <View style={styles.simpleTable}>
          {supplementaryFees.map(item => (
            <View key={item.id} style={styles.simpleTableRow}>
              <Text style={[styles.simpleTableCell, {flex: 3}]}>{item.program}</Text>
              <Text style={[styles.simpleTableCell, {flex: 1}]}>{item.fee}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.note}>Note: Fees are non-refundable.</Text>
      </View>

      {/* Scholarships */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>8. Scholarships</Text>
        <Text style={styles.text}>IU offers nearly 5 billion VND in annual scholarships including:</Text>
        <Text style={styles.listItem}>- Admission scholarships (25%, 50%, 100%)</Text>
        <Text style={styles.listItem}>- Academic excellence scholarships (25% tuition)</Text>
        <Text style={styles.listItem}>- Research scholarships</Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>9. Contact Information</Text>
        <Text style={styles.subsectionTitle}>Main Campus:</Text>
        <Text style={styles.text}>Room O2.609, International University</Text>
        <Text style={styles.text}>Quarter 6, Linh Trung Ward, Thu Duc City</Text>
        <Text style={styles.text}>Phone: (+84) 28 3724 4270 (Ext: 3120, 3209)</Text>
        
        <Text style={styles.subsectionTitle}>Downtown Office:</Text>
        <Text style={styles.text}>Floor 3, Building C4, HCMUT</Text>
        <Text style={styles.text}>142 To Hien Thanh, Ward 14, District 10</Text>
        
        <Text style={styles.subsectionTitle}>Other Contacts:</Text>
        <Text style={styles.text}>Hotline: 1800-9040</Text>
        <Text style={styles.text}>Email: info.grad@hcmiu.edu.vn</Text>
        
        <View style={styles.linkContainer}>
          <MaterialIcons name="link" size={16} color="#1e90ff" />
          <Text style={styles.linkText} onPress={() => openWebsite('https://zalo.me/g/vbauuy201')}>
            Zalo Admission Group
          </Text>
        </View>
      </View>

      {/* Official Links */}
      <View style={styles.linkSection}>
        <Text style={styles.sectionTitle}>Official Links</Text>
        <View style={styles.linkContainer}>
          <MaterialIcons name="link" size={16} color="#1e90ff" />
          <Text style={styles.linkText} onPress={() => openWebsite('https://oga.hcmiu.edu.vn/tuyen-sinh-thac-si/')}>
            Official Admission Website
          </Text>
        </View>
        <View style={styles.linkContainer}>
          <MaterialIcons name="map" size={16} color="#1e90ff" />
          <Text style={styles.linkText} onPress={() => openWebsite('https://maps.app.goo.gl/UV1qUcy6JNVRMUXm8')}>
            Main Campus Map
          </Text>
        </View>
      </View>
    </ScrollView>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Useful Information')}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3498db',
    marginTop: 8,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#34495e',
    marginBottom: 5,
  },
  listItem: {
    fontSize: 14,
    lineHeight: 20,
    color: '#34495e',
    marginLeft: 10,
    marginBottom: 3,
  },
  note: {
    fontSize: 13,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginTop: 5,
  },
  backButton: {
    bottom: 20, 
    right: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  tableCell: {
    padding: 8,
    fontSize: 12,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  simpleTable: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  simpleTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  simpleTableCell: {
    fontSize: 13,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#1e90ff',
    fontSize: 14,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  linkSection: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  footerNote: {
    fontSize: 12,
    color: '#95a5a6',
    textAlign: 'center',
    marginVertical: 10,
    fontStyle: 'italic',
  },
});

export default GraduateInformation;