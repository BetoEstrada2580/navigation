import React,{useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
    const {authState,logOut} = useContext(AuthContext);
    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>AlbumsScreen</Text>
            {authState.isLoggeIn && <Button title="LogOut" onPress={logOut} />}
        </View>
    );
};
