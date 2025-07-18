import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { curriApi } from '../../Api/Api';

const MAJOR_ICONS = {
  'School of Biomedical Engineering': 'biotech',
  'School of Chemical & Environmental Engineering': 'science',
  'School of Civil Engineering and Management': 'architecture',
  'School of Electrical Engineering': 'bolt',
  'Department of Physics': 'rocket-launch',
  'School of Industrial Engineering and Management': 'factory',
  'School of Computer Science and Engineering': 'computer',
  'Mathematics': 'calculate',
  'School of Business': 'business',
};

const MajorTable = ({ route }) => {
  const navigation = useNavigation();
  const { majorName, logo } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [newMajorsData, setNewMajorsData] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchCurriData();
  }, []);

  const handleBackPress = () => {
    navigation.navigate('Training Program');
  };

  const fetchCurriData = async () => {
    setIsLoading(true);
    setProgress(0);
    
    try {
      // Tạo một timer để cập nhật tiến trình (đây chỉ là mô phỏng)
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          let upNumber = 10
          if(prev > 11) upNumber = prev%10+5;
          const newProgress = prev + upNumber;
          return newProgress > 90 ? 90 : newProgress; // Dừng ở 90% để chờ request hoàn thành
        });
      }, 80); // Giảm thời gian interval để mượt hơn

      const response = await curriApi.getLastedCurri();
      
      // Axios response có data trong response.data
      const data = response.data;

      setNewMajorsData(data.majors || []);
      setProgress(100); // Đặt 100% khi hoàn thành
      
      Alert.alert(
        'THÀNH CÔNG', 
        'Đã lấy dữ liệu thành công!'
      );
      
      clearInterval(progressInterval);
    } catch (error) {
      console.error('Lỗi khi fetch data:', error);
      Alert.alert(
        'THẤT BẠI', 
        `Không thể lấy dữ liệu: ${error.message}`
      );
    } finally {
      setTimeout(() => setIsLoading(false), 500); // Thêm delay nhỏ để hiển thị 100%
    }
  };

  const getConcentrationProgram = (concentrationName, majorData) => {
    return majorData?.concentrations?.find(concentration => 
      concentration.name === concentrationName
    );
  };

  const getMajorProgram = (majorName) => {
    return newMajorsData.find(major => major.name === majorName) || {};
  };
  const getListConcentrationName = (major) => {
    // Extract concentration names from the major data
    const listConcName = major.concentrations.map(concentration => ({
      name: concentration.name
    }));
    
    return listConcName;
  }
  const handleProgramPress = (concentrationName) => {
    const majorProgram = getMajorProgram(majorName);
    if (!majorProgram || !majorProgram.concentrations) {
      console.error("Major program or concentrations not found");
      return;
    }

    const concentrationProgram = getConcentrationProgram(concentrationName, majorProgram);
    if (!concentrationProgram) {
      console.error("Concentration program not found");
      return;
    }


    navigation.navigate('Program Table', { 
      program: concentrationProgram,
      programName: concentrationName,
      majorName: majorName,
      logo: logo
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => handleProgramPress(item.name)}
    >
      <View style={styles.itemContent}>
        <Image 
          source={logo} 
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
      <TouchableOpacity 
        style={[styles.actionButton, styles.backButton]}
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <FlatList
        data={getListConcentrationName(getMajorProgram(majorName))}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <Text style={styles.header}>{majorName}</Text>
        )}
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
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 16,
    paddingBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
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

export default MajorTable;