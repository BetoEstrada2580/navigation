import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';

interface Props extends NativeStackScreenProps<any,any>{

}

export const Pagina3Screen = ({navigation}:Props) => {
    return (
        <View>
            <Text>Pagina3Screen</Text>
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
