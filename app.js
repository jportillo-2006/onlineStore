import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainStackNavigator from './navigation/MainNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <MainStackNavigator />
    );
}