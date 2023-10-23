import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number,
//     nombre: string,
// }

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{ }

export const PersonaScreen = ({route,navigation}: Props) => {
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        });
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
