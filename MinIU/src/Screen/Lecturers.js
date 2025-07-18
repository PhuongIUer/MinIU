import { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { userApi } from '../Api/Api';

const Lecturers = () => {
  const navigation = useNavigation();
  const pageNumber = 1;
  const limitUsers = 500;

  const [isLoading, setIsLoading] = useState(true);
  const [newResponseData, setResponseData] = useState({ items: [], meta: {} });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchResponseData();
  }, []);

    const major = [
    { name: 'Department of Biotechnology', logo: require('../../assets/Logo/BT.png') },
    { name: 'School of Chemical & Environmental Engineering', logo: require('../../assets/Logo/CH.png') },
    { name: 'School of Civil Engineering and Management', logo: require('../../assets/Logo/CE.png') },
    { name: 'School of Electrical Engineering', logo: require('../../assets/Logo/EE.png') },
    { name: 'Department of Physics', logo: require('../../assets/Logo/PH.png') },
    { name: 'School of Industrial Engineering and Management', logo: require('../../assets/Logo/IEM.jpg') },
    { name: 'School of Computer Science and Engineering', logo: require('../../assets/Logo/IT.png') }, 
    { name: 'Department of Mathematics', logo: require('../../assets/Logo/MA.png') },
    { name: 'School of Business', logo: require('../../assets/Logo/BS.jpg') }, 
    { name: 'School of Biomedical Engineering', logo: require('../../assets/Logo/BME.jpg') }, 
  ];

  const fetchResponseData = async () => {
    setIsLoading(true);
    setProgress(0);
    
    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          let upNumber = 10;
          if (prev > 11) upNumber = prev % 10 + 5;
          return Math.min(prev + upNumber, 90);
        });
      }, 80);

      const response = await userApi.getUsers(pageNumber, limitUsers);
      
      if (response.data) {
        setResponseData(response.data);
      } else {
        throw new Error('Dữ liệu trả về không hợp lệ');
      }
      
      setProgress(100);
      clearInterval(progressInterval);
    } catch (error) {
      console.error('Lỗi khi fetch data:', error);
      Alert.alert('Lỗi', error.message || 'Không thể lấy dữ liệu');
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const getLecturerList = useCallback((responseData, majorFilter = '') => {
    if (!responseData?.items) return [];
    
    return responseData.items
      .filter(item => !majorFilter || 
        item.major?.toLowerCase() === majorFilter.toLowerCase())
      .map(({ userName, position, email, office, avatar }) => ({
        name: userName || '',
        position: position || '',
        email: email || '',
        office: office || '',
        avatar: avatar || ''
      }));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Lecturer Table', { lecturers: getLecturerList(newResponseData, item.name), majorName: item.name })}
    >
      <View style={styles.itemContent}>
        <Image 
          source={item.logo} 
          style={styles.itemLogo} 
          resizeMode="contain"
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#6c757d" />
    </TouchableOpacity>
  );
  
  if (isLoading) {
    return (
      <View style={styles.fullScreenLoading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <View style={styles.progressContainer}>
          <Text style={styles.loadingText}>Đang tải dữ liệu: {progress}%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={major}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Không có dữ liệu</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  progressContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  screen: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  bottomImage: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
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
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
});

export default Lecturers;