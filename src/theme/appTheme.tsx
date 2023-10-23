import {  StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20,
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
    },
    btnGrande:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGrandeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20,
    },
    avatar:{
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
        gap: 10,
    },
    menuBtn:{

    },
    menuText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
