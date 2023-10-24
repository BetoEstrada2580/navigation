import React from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';

export const AlbumsScreen = () => {
    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>AlbumsScreen</Text>
        </View>
    );
};
