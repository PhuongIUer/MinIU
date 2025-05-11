import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
//Main import
import CardScreen from '../Screen/Club/CardScreen'
import ArtsAndCultureClub from '../Screen/Club/ArtsAndCultureClubScreen';
import AcademicAndSkillsClub from '../Screen/Club/AcademicAndSkillsClubScreen';
import LearningSupportAndPersonalDevClub from '../Screen/Club/LearningSupportAndPersonalDevClubScreen';
import VolunteerAndSocialWorkClub from '../Screen/Club/VolunteerAndSocialWorkClubScreen';
import SportsAndEsportsClub from '../Screen/Club/SportsAndEsportsClubScreen';
//Club import
import CentralLibrary from '../Screen/Map/CentralLibraryScreen';
import InternationalUniversity from '../Screen/Map/InternationalUniversityScreen';
import InstituteforEnvironmentandResources from '../Screen/Map/InstituteforEnvironmentandResourcesScreen';
//Map import
import Floor_1A from '../Screen/Map/Campus A/Floor-1';
import Floor_2A from '../Screen/Map/Campus A/Floor-2';
import Floor_3A from '../Screen/Map/Campus A/Floor-3';
import Floor_4A from '../Screen/Map/Campus A/Floor-4';
import Floor_5A from '../Screen/Map/Campus A/Floor-5';
import Floor_6A from '../Screen/Map/Campus A/Floor-6';
import Floor_7A from '../Screen/Map/Campus A/Floor-7';
//Campus A import
import Floor_1L from '../Screen/Map/Campus L/Floor-1';
import Floor_2L from '../Screen/Map/Campus L/Floor-2';
//Campus L import
import Floor_4C from '../Screen/Map/Campus C/Floor-4';
import Floor_5C from '../Screen/Map/Campus C/Floor-5';
//Campus C import
import Lecturers from '../Screen/Lecturers';
import LecturerTable from '../Screen/Lecturers/LecturerTable';

import TrainingProgram from '../Screen/TrainingProgram';
import ProgramTable from '../Screen/Program/ProgramTable';
import MajorTable from '../Screen/Program/MajorTable';

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
//Drawer import
import ThongNhat from '../../assets/50nam.png'

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
        onPress={() => props.navigation.navigate('MinIU - Home')}
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
        <Stack.Screen name="MainApp - Home">
          {() => (
            <Drawer.Navigator 
              initialRouteName="MinIU - Home"
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
                name="MinIU - Home" 
                component={Home} 
                options={{ drawerItemStyle: { display: 'none' } }}
              />
              <Drawer.Screen name="Lecturers" component={Lecturers} options={{ drawerIcon: LecturersIcon }} />
        <Drawer.Screen 
          name="Lecturer Table" 
          component={LecturerTable} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
              <Drawer.Screen name="Training program" component={TrainingProgram} options={{ drawerIcon: TrainingProgramIcon }} />
        <Drawer.Screen 
          name="Program Table" 
          component={ProgramTable} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Major Table" 
          component={MajorTable} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
              <Drawer.Screen name="Form" component={Form} options={{ drawerIcon: FormIcon }} />
              <Drawer.Screen name="Club" component={Club} options={{ drawerIcon: ClubIcon }} />
        <Drawer.Screen 
          name="Card Screen" 
          component={CardScreen} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Arts and Culture Club" 
          component={ArtsAndCultureClub} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Academic and Skills Club" 
          component={AcademicAndSkillsClub} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Learning Support and Personal Dev Club" 
          component={LearningSupportAndPersonalDevClub} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Volunteer and Social Work Club" 
          component={VolunteerAndSocialWorkClub} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
        <Drawer.Screen 
          name="Sports and Esports Club" 
          component={SportsAndEsportsClub} 
          options={{ drawerItemStyle: { display: 'none' }}} 
        />
              <Drawer.Screen name="Campus Map" component={CampusMap} options={{ drawerIcon: CampusMapIcon }} />
              <Drawer.Screen name="Divisions and Centers" component={DivisionsAndCenters} options={{ drawerIcon: DivisionsAndCentersIcon }} />
              <Drawer.Screen name="Support" component={Support} options={{ drawerIcon: SupportIcon }} />
              <Drawer.Screen name="Useful Information" component={UsefulInformation} options={{ drawerIcon: UsefulInformationIcon }} />
          <Drawer.Screen 
            name="International University - Campus A" 
            component={InternationalUniversity} 
            options={{ drawerItemStyle: { display: 'none' }}} 
          />
          <Drawer.Screen 
          name="Floor 1 - Campus A" 
          component={Floor_1A} 
          options={{ drawerItemStyle: { display: 'none' }}} 
          />
          <Drawer.Screen
          name="Floor 2 - Campus A"
          component={Floor_2A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 3 - Campus A"
          component={Floor_3A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 4 - Campus A"
          component={Floor_4A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 5 - Campus A"
          component={Floor_5A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 6 - Campus A"
          component={Floor_6A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 7 - Campus A"
          component={Floor_7A}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Central Library - Campus L"
          component={CentralLibrary}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen 
          name="Floor 1 - Campus L" 
          component={Floor_1L} 
          options={{ drawerItemStyle: { display: 'none' }}} 
          />
          <Drawer.Screen
          name="Floor 2 - Campus L"
          component={Floor_2L}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
        <Drawer.Screen
          name="Institute for Environment and Resources Campus C"
          component={InstituteforEnvironmentandResources}
          options={{ drawerItemStyle: { display: 'none' }}}
        />
          <Drawer.Screen
          name="Floor 4 - Campus C"
          component={Floor_4C}
          options={{ drawerItemStyle: { display: 'none' }}}
          />
          <Drawer.Screen
          name="Floor 5 - Campus C"
          component={Floor_5C}
          options={{ drawerItemStyle: { display: 'none' }}}
          />      
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