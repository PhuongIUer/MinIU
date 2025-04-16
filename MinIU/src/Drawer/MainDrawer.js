import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import all screen components
import Lecturers from '../Screen/Lecturers';
import TrainingProgram from '../Screen/TrainingProgram';
import Form from '../Screen/Form';
import Club from '../Screen/Club';
import CampusMap from '../Screen/CampusMap';
import DivisionsAndCenters from '../Screen/DivisionsAndCenters';
import Support from '../Screen/Support';
import UsefulInformation from '../Screen/UsefulInformation';
import FeedbackRatingApp from '../Screen/FeedbackRatingApp';
import FeedbackLecturers from '../Screen/FeedbackLecturers';
import FeedbackUniversity from '../Screen/FeedbackUniversity';
import AboutMe from '../Screen/AboutMe';
import Home from '../Screen/Home';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const EmptyScreen = () => null;
// Icons
const LecturersIcon = ({focused, color, size}) => <Ionicons name="people" size={size} color={color} />;
const TrainingProgramIcon = ({focused, color, size}) => <Ionicons name="book" size={size} color={color} />;
const FormIcon = ({focused, color, size}) => <Ionicons name="document-text" size={size} color={color} />;
const ClubIcon = ({focused, color, size}) => <Ionicons name="people-circle" size={size} color={color} />;
const CampusMapIcon = ({focused, color, size}) => <Ionicons name="map" size={size} color={color} />;
const DivisionsAndCentersIcon = ({focused, color, size}) => <Ionicons name="business" size={size} color={color} />;
const SupportIcon = ({focused, color, size}) => <Ionicons name="help-buoy" size={size} color={color} />;
const UsefulInformationIcon = ({focused, color, size}) => <Ionicons name="information-circle" size={size} color={color} />;
const FeedbackRatingAppIcon = ({focused, color, size}) => <Ionicons name="star-half" size={size} color={color} />;
const FeedbackLecturersIcon = ({focused, color, size}) => <Ionicons name="chatbubbles" size={size} color={color} />;
const FeedbackUniversityIcon = ({focused, color, size}) => <Ionicons name="school" size={size} color={color} />;
const AboutMeIcon = ({focused, color, size}) => <Ionicons name="person" size={size} color={color} />;

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <TouchableOpacity 
        style={styles.logoContainer}
        onPress={() => props.navigation.navigate('MinIU')}
      >
        <Image
          source={require('../../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>MinIU</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainApp">
          {() => (
            <Drawer.Navigator 
              initialRouteName="MinIU"
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              screenOptions={{
                drawerStyle: {
                  backgroundColor: '#f5f5f5',
                  width: 250,
                },
                drawerLabelStyle: {
                  fontSize: 16,
                  marginLeft: -5,
                },
                drawerActiveTintColor: '#2c3e50',
                drawerInactiveTintColor: '#7f8c8d',
              }}
            > 
              <Drawer.Screen 
                name="MinIU" 
                component={Home} 
                options={{ drawerItemStyle: { display: 'none' } }}
              />
              <Drawer.Screen name="Lecturers" component={Lecturers} options={{ drawerIcon: LecturersIcon }} />
              <Drawer.Screen name="Training program" component={TrainingProgram} options={{ drawerIcon: TrainingProgramIcon }} />
              <Drawer.Screen name="Form" component={Form} options={{ drawerIcon: FormIcon }} />
              <Drawer.Screen name="Club" component={Club} options={{ drawerIcon: ClubIcon }} />
              <Drawer.Screen name="Campus Map" component={CampusMap} options={{ drawerIcon: CampusMapIcon }} />
              <Drawer.Screen name="Divisions and Centers" component={DivisionsAndCenters} options={{ drawerIcon: DivisionsAndCentersIcon }} />
              <Drawer.Screen name="Support" component={Support} options={{ drawerIcon: SupportIcon }} />
              <Drawer.Screen name="Useful Information" component={UsefulInformation} options={{ drawerIcon: UsefulInformationIcon }} />
              <Drawer.Screen 
                name="Divider" 
                component={EmptyScreen} 
                options={{
                  drawerLabel: () => null,
                  drawerIcon: () => null,
                  drawerItemStyle: {
                    height: 1,
                    backgroundColor: '#ccc',
                    marginVertical: 10,
                  }
                }}
              />
              <Drawer.Screen name="Feedback Rating App" component={FeedbackRatingApp} options={{ drawerIcon: FeedbackRatingAppIcon }} />
              <Drawer.Screen name="Feedback Lecturers" component={FeedbackLecturers} options={{ drawerIcon: FeedbackLecturersIcon }} />
              <Drawer.Screen name="Feedback University" component={FeedbackUniversity} options={{ drawerIcon: FeedbackUniversityIcon }} />
              <Drawer.Screen name="About Me" component={AboutMe} options={{ drawerIcon: AboutMeIcon }} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    paddingLeft: 15, 
  },
  logo: {
    width: 40, 
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50', 
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default MainDrawer;