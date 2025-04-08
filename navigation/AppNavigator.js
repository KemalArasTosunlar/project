import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LogbookScreen from '../screens/LogbookScreen';
import DogProfileScreen from '../screens/DogProfileScreen';
import ReminderScreen from '../screens/ReminderScreen';
import CommunityScreen from '../screens/CommunityScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import ChatAIScreen from '../screens/ChatAIScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Logbook" component={LogbookScreen} />
                <Stack.Screen name="DogProfile" component={DogProfileScreen} />
                <Stack.Screen name="Reminder" component={ReminderScreen} />
                <Stack.Screen name="Community" component={CommunityScreen} />
                <Stack.Screen name="PostDetail" component={PostDetailScreen} />
                <Stack.Screen name="ChatAI" component={ChatAIScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
