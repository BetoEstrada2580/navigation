import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabs } from './TopTabs';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () =>{
    return (Platform.OS === 'ios'
        ?  <BottomTabsIOS />
        : <BottomTabsAndroid />);
};

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
                            iconName = 'alert-circle-outline';
                        break;
                        case 'Tab2Screen':
                            iconName = 'list-outline';
                        break;
                        case 'StackNavigator':
                            iconName = 'navigate-circle-outline';
                        break;
                    }
                    return <Icon name={iconName} size={25} color={color} />;
                },
            })}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
        >
            <TabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
            <TabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabs} />
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
            tabBarIcon: ({color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'alert-circle-outline';
                    break;
                    case 'Tab2Screen':
                        iconName = 'list-outline';
                    break;
                    case 'StackNavigator':
                        iconName = 'navigate-circle-outline';
                    break;
                }
                return <Icon name={iconName} size={20} color={color} />;
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
            <TabIOS.Screen name="Tab2Screen" options={{headerShown:false,title:'Tab2'}} component={TopTabs} />
            <TabIOS.Screen name="StackNavigator" options={{headerShown:false,title:'Stack'}} component={StackNavigator} />
        </TabIOS.Navigator>
    );
};
