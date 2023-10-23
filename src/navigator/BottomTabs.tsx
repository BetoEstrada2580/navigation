import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { appStyles, colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { useTheme } from 'react-native-paper';


export const Tabs = () =>{
    return (Platform.OS === 'ios'
        ?  <BottomTabsIOS />
        : <BottomTabsAndroid />);
};

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
    const theme = useTheme();
    theme.colors.secondaryContainer = 'transperent';
    return (
        <TabAndroid.Navigator
            sceneAnimationEnabled = {true}
            barStyle={{backgroundColor: colores.primary}}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
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
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <TabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
            <TabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={Tab2Screen} />
            <TabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
        </TabAndroid.Navigator>
    );
};

const TabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
    return (
        <TabIOS.Navigator
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
            {/* <TabIOS.Screen name="Tab1Screen"
                options={{
                    headerShown:false,
                    title:'Tab1',
                    tabBarIcon: (props)=>(<Text style={{color: props.color}}>T1</Text>)
                }}
                component={Tab1Screen} /> */}
            <TabIOS.Screen name="Tab1Screen" options={{headerShown:false,title:'Tab1'}} component={Tab1Screen} />
            <TabIOS.Screen name="Tab2Screen" options={{headerShown:false,title:'Tab2'}} component={Tab2Screen} />
            <TabIOS.Screen name="StackNavigator" options={{headerShown:false,title:'Stack'}} component={StackNavigator} />
        </TabIOS.Navigator>
    );
};
