import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {

    }, []);

    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>Iconos</Text>
            <Text>
                <TouchableIcon name="rocket" />
                <TouchableIcon name="airplane" />
                <TouchableIcon name="cloudy" />
                <TouchableIcon name="cart" />
                <TouchableIcon name="cut" />
                <TouchableIcon name="leaf" />
            </Text>
        </View>
    );
};
