import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { appStyles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext);

  return (
    <View style={appStyles.globalMargin}>
        <Text style= {appStyles.title}>SettingsScreen</Text>
        <Text>
            {JSON.stringify(authState,null,3)}
        </Text>
        {
          authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={80} color={colores.primary} />
        }
    </View>
  );
};
