import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { appStyles } from '../theme/appTheme';

export const Tab2Screen = () => {
    useEffect(() => {

    }, []);

    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>Tab2Screen</Text>
        </View>
    );
};
