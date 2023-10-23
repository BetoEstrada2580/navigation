import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appTheme';

export const Tab1Screen = () => {

    useEffect(() => {

    }, []);

    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>Tab1Screen</Text>
        </View>
    );
};
