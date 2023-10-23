import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView  } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import React from 'react';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { BottomTabs } from './BottomTabs';

const Drawer = createDrawerNavigator();

export const SideBarMenuAlter = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={(props)=> <MenuInterno {...props} /> }
        >
            <Drawer.Screen name="BottomTabs" options={{headerShown:true}} component={BottomTabs} />
            <Drawer.Screen name="SettingsScreen" options={{headerShown:true}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};


export const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={appStyles.avatarContainer}>
                <Image
                    source={{
                        uri:'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
                    }}
                    style={appStyles.avatar}
                />
            </View>
            {/* Opciones de menú */}
            <View style={appStyles.menuContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('BottomTabs') } >
                    <Text style={appStyles.menuText} >Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('SettingsScreen') } >
                    <Text style={appStyles.menuText} >Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
