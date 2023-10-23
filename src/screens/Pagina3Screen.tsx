import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { appStyles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any,any>{

}

export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View>
            <Text style={appStyles.globalMargin} >Pagina3Screen</Text>
            <Button
                title={'Regresar'}
                onPress={()=> navigation.pop()}
            />
            <Button
                title={'Ir a la Pagina 1'}
                onPress={()=> navigation.popToTop()}
            />
        </View>
    );
};
