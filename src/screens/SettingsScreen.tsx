import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../theme/appTheme';

export const SettingsScreen = () => {
  return (
    <View style={appStyles.globalMargin}>
        <Text style= {appStyles.title}>SettingsScreen</Text>
    </View>
  )
}
