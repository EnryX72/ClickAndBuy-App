import { Tabs } from 'expo-router';
import * as Haptics from 'expo-haptics';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: (event) => {
            Haptics.selectionAsync();
          },
        }}
      />

      <Tabs.Screen
        name="categorie"
        options={{
          title: 'Categorie',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'albums' : 'albums-outline'} color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: (event) => {
            Haptics.selectionAsync();
          },
        }}
      />

      <Tabs.Screen
        name="carrello"
        options={{
          title: 'Carrello',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24}/>
          ),
        }}
        listeners={{
          tabPress: (event) => {
            Haptics.selectionAsync();
          },
        }}
      />

      <Tabs.Screen
        name="profilo"
        options={{
          title: 'Profilo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24}/>
          ),
        }}
        listeners={{
          tabPress: (event) => {
            Haptics.selectionAsync();
          },
        }}
      />
    </Tabs>
  );
}
