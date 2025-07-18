// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MainDrawer from './src/Drawer/MainDrawer';
import Loading from './src/Utility/Loading';
import Instruction from './src/Utility/Instruction';

export default function App() {
  const [loadingProgress, setLoadingProgress] = useState(30);
  const [showOpenButton, setShowOpenButton] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setShowOpenButton(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleOpenApp = () => {
    setShowOpenButton(false); 
    setLoadingProgress(101); 
    setShowInstruction(true);
  };

  if (loadingProgress < 101) {
    return (
      <>
        <StatusBar hidden />
        <Loading 
          loadingProgress={loadingProgress}
          showOpenButton={showOpenButton}
          onOpenApp={handleOpenApp}
        />
      </>
    );
  }

return (
    <>
      <View style={styles.container}>
        <MainDrawer />
        <Text style={styles.versionText}>v1.3.0</Text>
      </View>
      <Instruction 
        visible={showInstruction} 
        onClose={() => setShowInstruction(false)} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  versionText: {
    position: 'absolute',
    top: 5,
    right: 10,
    fontSize: 12,
    color: 'gray',
    zIndex: 1000, // Đảm bảo hiển thị trên cùng
  },
});