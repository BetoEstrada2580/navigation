import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { appStyles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

    useEffect(() => {

    }, []);

    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>Iconos</Text>
            <Text>
                <Icon name="rocket" size={80} color={colores.primary} />
                <Icon name="airplane" size={80} color={colores.primary} />
                <Icon name="cloudy" size={80} color={colores.primary} />
                <Icon name="cart" size={80} color={colores.primary} />
                <Icon name="cut" size={80} color={colores.primary} />
            </Text>
        </View>
    );
};
