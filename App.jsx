import React from 'react';
import { Text, Platform } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';

// --- IMPOR REACT NAVIGATION ---
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- IMPOR LAYAR (SCREENS) ---
import AboutScreen from './src/screens/AboutScreen.jsx';
import ProjectsScreen from './src/screens/ProjectScreen.jsx';
import ContactScreen from './src/screens/ContactScreen.jsx';

// Inisialisasi Tab Navigator
const Tab = createBottomTabNavigator();

// Komponen utama aplikasi
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TentangSaya"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'TentangSaya') {
              icon = focused ? '👤' : '👥';
            } else if (route.name === 'Portofolio') {
              icon = focused ? '🌟' : '✨';
            } else if (route.name === 'Kontak') {
              icon = focused ? '📞' : '📧';
            }
            
            return <Text style={{ 
              color, 
              fontSize: size,
              transform: [{ scale: focused ? 1.2 : 1 }],
              transition: '0.3s'
            }}>{icon}</Text>;
          },
          tabBarActiveTintColor: '#4a148c',
          tabBarInactiveTintColor: '#9575cd',
          tabBarLabelStyle: { 
            fontSize: 12, 
            fontWeight: '600',
            marginBottom: 5
          },
          tabBarStyle: { 
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          position: 'absolute',
          bottom: 25, // Memberikan jarak dari bawah
          left: 20,   // Memberikan jarak dari kiri
          right: 20,  // Memberikan jarak dari kanan
          borderRadius: 15, // Membuat sudut membulat
          marginHorizontal: 5,
        },
        contentStyle: {
          paddingBottom: 90,
        },
        })}
      >
        <Tab.Screen 
          name="TentangSaya" 
          component={AboutScreen} 
          options={{ title: 'About Me' }} 
        />
        <Tab.Screen 
          name="Portofolio" 
          component={ProjectsScreen} 
          options={{ title: 'Projects' }} 
        />
        <Tab.Screen 
          name="Kontak" 
          component={ContactScreen} 
          options={{ title: 'Contact' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}