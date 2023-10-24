import React from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';

export const ContactsScreen = () => {
    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>ContactsScreen</Text>
        </View>
    );
};
