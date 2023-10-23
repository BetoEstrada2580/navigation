import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any,any>{ }

export const Pagina1Screen = ({navigation}:Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: ()=> (
                <TouchableOpacity >
                    <Button title="Menú" onPress={()=> navigation.toggleDrawer()} />
                </TouchableOpacity>
            ),
        });
    }, []);

    return (
        <View style={appStyles.globalMargin} >
            <Text style={appStyles.title}>Pagina1Screen</Text>
            <Button
                title={'Ir a pagina 2'}
                onPress={()=> navigation.navigate('Pagina2Screen')}
            />

            <Text>
                Navegar con argumentos
            </Text>

            <View style={{flexDirection:'row',gap: 20}}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('PersonaScreen',{
                        id: 1,
                        nombre: 'Pedro',
                    })}
                    style={appStyles.btnGrande}
                >
                    <Text style={appStyles.btnGrandeText} >Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> navigation.navigate('PersonaScreen',{
                        id: 2,
                        nombre: 'Maria',
                    })}
                    style={{
                        ...appStyles.btnGrande,
                        backgroundColor: '#FF9427',
                    }}
                >
                    <Text style={appStyles.btnGrandeText} >Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
