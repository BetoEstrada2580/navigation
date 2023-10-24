import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any,any>{ }

export const Pagina1Screen = ({navigation}:Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: ()=> (
                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                    }}
                    onPress={()=> navigation.toggleDrawer()}>
                    <Icon name="menu-outline" size={35} color={'black'} />
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
                    <Icon name="body-outline" size={35} color={'white'} />
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
                    <Icon name="woman-outline" size={35} color={'white'} />
                    <Text style={appStyles.btnGrandeText} >Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
