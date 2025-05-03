import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LecturerCard from '../Screen/Lecturers/LecturerCard';

const Lecturers = () => {
  // Sample lecturer data
  const lecturers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Computer Science',
      email: 's.johnson@university.edu',
      office: 'Building A, Room 205',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      position: 'Electrical Engineering',
      email: 'm.chen@university.edu',
      office: 'Building B, Room 312',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Dr. Emily Wilson',
      position: 'Mathematics',
      email: 'e.wilson@university.edu',
      office: 'Building C, Room 108',
      imageUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  ];

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>Faculty Lecturers</Text>
      {lecturers.map((lecturer) => (
        <LecturerCard
          key={lecturer.id}
          name={lecturer.name}
          position={lecturer.position}
          email={lecturer.email}
          office={lecturer.office}
          imageUrl={lecturer.imageUrl}
        />
      ))}
    </ScrollView>
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
});

export default Lecturers;