import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Linking } from 'react-native';

const LecturerCard = ({ name, position, email, office, avatar }) => {
  const [imageError, setImageError] = React.useState(false);

  const getCardStyle = () => {
    const lowerPosition = position.toLowerCase();
    if (lowerPosition.includes('head')) {
      return styles.headOfDepartmentCard;
    } else if (lowerPosition.includes('dean') && !lowerPosition.includes('vice')) {
      return styles.deanCard;
    } else if (lowerPosition.includes('vice')) {
      return styles.viceDeanCard;
    } else if (lowerPosition.includes('secretary')) {
      return styles.secretaryCard;
    } 
    return styles.card;
  };

  const getTextStyle = () => {
    const cardStyle = getCardStyle();
    if (cardStyle !== styles.card) {
      return styles.specialText;
    }
    return styles.regularText;
  };

  const handleContact = () => {
    Alert.alert(
      'Contact Lecturer',
      `Do you want to contact ${name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            if (email) {
              Linking.openURL(`mailto:${email}`);
            } else {
              Alert.alert('Error', 'No email address available for this lecturer');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const textStyle = getTextStyle();

  return (
    <TouchableOpacity onPress={handleContact} activeOpacity={0.7}>
      <View style={[getCardStyle(), styles.cardElevation]}>
        <View style={styles.imageContainer}>
          {avatar && !imageError ? (
            <Image 
              source={{ uri: avatar }} 
              style={styles.image} 
              onError={handleImageError}
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={textStyle}>Photo</Text>
            </View>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.name, textStyle]}>{name}</Text>
          <Text style={[styles.position, textStyle, styles.positionMargin]}>{position}</Text>
          <Text style={[styles.detail, textStyle]}>Email: {email || 'N/A'}</Text>
          <Text style={[styles.detail, textStyle]}>Office: {office || 'N/A'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#F2F9FF',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
  },
  cardElevation: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },

  deanCard: {
    backgroundColor: '#F2F9FF', 
    borderLeftWidth: 6,
    borderLeftColor: '#ffc107', 
    borderRadius: 12,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
  },
  viceDeanCard: {
    backgroundColor: '#F2F9FF', 
    borderLeftWidth: 6,
    borderLeftColor: '#bbdefb', 
    borderRadius: 12,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
  },
  secretaryCard: {
    backgroundColor: '#F2F9FF', 
    borderLeftWidth: 6,
    borderLeftColor: '#c8e6c9',
    borderRadius: 12,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
  },
  headOfDepartmentCard: {
    backgroundColor: '#F2F9FF',
    borderLeftWidth: 6,
    borderLeftColor: '#d1c4e9', 
    borderRadius: 12,
    padding: 16,
    margin: 10,
    flexDirection: 'row',
  },

  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2, 
    borderColor: 'rgba(255,255,255,0.5)', 
  },
  placeholderImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)', 
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  
  regularText: {
    color: '#495057',
  },
  specialText: {
    color: '#222831',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600', 
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    fontWeight: '500',
  },
  positionMargin: {
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 3,
    lineHeight: 20, 
  },
});

export default LecturerCard;