import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF', // Active tab icon and label color (white for contrast)
        tabBarInactiveTintColor: '#000', // Inactive tab icon and label color
        tabBarActiveBackgroundColor: '#F2C14E', // Active background color for tab (BuyNaBay theme color)
        tabBarInactiveBackgroundColor: '#F2C14E', // Inactive background color for tab (BuyNaBay theme color)
        tabBarLabelStyle: {
          fontSize: 12, // Adjusted font size for better readability
        },
        tabBarStyle: {
          height: 60, // Adjust height for comfort
          backgroundColor: '#F2C14E', // Set the tab container color to BuyNaBay theme color
          borderTopWidth: 2, // Add border outline
          borderColor: '#F2C14E', // Border color matching the theme
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? '#FFFFFF' : '#000'} /> // Change icon color to white when active
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Tracker',
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" size={30} color={focused ? '#FFFFFF' : '#000'} /> // Change icon color to white when active
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Suggestion',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'envelope' : 'envelope-o'} size={20} color={focused ? '#FFFFFF' : '#000'} /> // Change icon color to white when active
          ),
        }}
      />
      <Tabs.Screen
        name="prof"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'user' : 'user-o'} size={20} color={focused ? '#FFFFFF' : '#000'} /> // Profile icon with different states
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
