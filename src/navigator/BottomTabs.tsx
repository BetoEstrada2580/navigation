import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle:{
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle:{
                    fontSize: 15,
                },
                tabBarIcon: ({color,focused,size}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                        break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                        break;
                        case 'StackNavigator':
                            iconName = 'ST';
                        break;
                    }
                    return <Text style={{color: color}}>{iconName}</Text>;
                },
            })}
        >
            {/* <Tab.Screen name="Tab1Screen"
                options={{
                    headerShown:false,
                    title:'Tab1',
                    tabBarIcon: (props)=>(<Text style={{color: props.color}}>T1</Text>)
                }}
                component={Tab1Screen} /> */}
            <Tab.Screen name="Tab1Screen" options={{headerShown:false,title:'Tab1'}} component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" options={{headerShown:false,title:'Tab2'}} component={Tab2Screen} />
            <Tab.Screen name="StackNavigator" options={{headerShown:false,title:'Stack'}} component={StackNavigator} />
        </Tab.Navigator>
    );
};
