import React from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';

export const ChatScreen = () => {
    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>ChatScreen</Text>
        </View>
    );
};
