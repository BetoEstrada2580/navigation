import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route}) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon:true,
                tabBarActiveTintColor: colores.primary,
                tabBarIndicatorStyle:{
                    backgroundColor: colores.primary,
                },
                tabBarIcon: ({color}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbox-ellipses-outline';
                        break;
                        case 'ContactsScreen':
                            iconName = 'people-outline';
                        break;
                        case 'AlbumsScreen':
                            iconName = 'albums-outline';
                        break;
                    }
                    return <Icon name={iconName} size={20} color={color} />;
                },
            })}
        >
            <Tab.Screen name="ChatScreen" options={{tabBarLabel: 'Chat'}}  component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" options={{tabBarLabel: 'Contact'}} component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" options={{tabBarLabel: 'Album'}} component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
