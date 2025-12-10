import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AppBar from './components/AppBar';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#606c38',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Accueil" 
        component={HomeScreen}
        options={{
          title: 'Tableau de bord',
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          title: 'Détails complets',
          headerBackTitle: 'Retour',
        }}
      />
    </Stack.Navigator>
  );
}

// Navigation par onglets principale
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#606c38F' }}>
        <NavigationContainer>
          <AppBar />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#432818',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                  backgroundColor: '#fff',
                  height: 65,
                  paddingBottom: 10,
                  paddingTop: 10,
                  borderTopWidth: 1,
                  borderTopColor: '#E0E0E0',
                  elevation: 8,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: -2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: '500',
                },
                tabBarIcon: ({ color, size, focused }) => {
                  let iconName;

                  if (route.name === 'Accueil') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Paramètres') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }

                  return (
                    <Ionicons 
                      name={iconName} 
                      size={size} 
                      color={color} 
                    />
                  );
                },
              })}
            >
              <Tab.Screen 
                name="Accueil" 
                component={HomeStack}
                options={{
                  tabBarLabel: 'Accueil',
                }}
              />
              <Tab.Screen 
                name="Paramètres" 
                component={SettingsScreen}
                options={{
                  tabBarLabel: 'Paramètres',
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}