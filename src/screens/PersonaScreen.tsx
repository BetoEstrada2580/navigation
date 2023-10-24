import React,{useEffect, useContext} from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{ }

export const PersonaScreen = ({route,navigation}: Props) => {
    const params = route.params;
    const {changeUsername} = useContext(AuthContext);
    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        });
    }, []);

    useEffect(() => {
        changeUsername(params.nombre);
    }, []);

    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>
                    {
                        JSON.stringify(params, null, 3)
                    }
                </Text>
        </View>
    );
};
