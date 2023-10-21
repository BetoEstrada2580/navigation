import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { appStyles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any,any>{ };

export const Pagina1Screen = ({navigation}:Props) => {
    return (
        <View style={appStyles.globalMargin}>
            <Text>Pagina1Screen</Text>
            <Button
                title={'Ir a pagina 2'}
                onPress={()=> navigation.navigate('Pagina2Screen')}
            />
        </View>
    );
};
