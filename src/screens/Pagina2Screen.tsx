import { useNavigation } from '@react-navigation/native';
import React,{ useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { appStyles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title:'Something',
            headerBackTitle: 'Regresar',
        });
    }, []);

    return (
        <View>
            <Text style={appStyles.globalMargin}>Pagina2Screen</Text>
            <Button
                title={'Ir a Pagina 3'}
                onPress={()=>navigator.navigate('Pagina3Screen') }
            />
        </View>
    );
};
