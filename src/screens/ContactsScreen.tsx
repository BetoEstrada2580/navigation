import React,{useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
    const {signIn, authState} = useContext(AuthContext);
    return (
        <View style={appStyles.globalMargin}>
            <Text style={appStyles.title}>ContactsScreen</Text>
            {
                !authState.isLoggeIn && <Button title="SigIn" onPress={signIn} />
            }
        </View>
    );
};
