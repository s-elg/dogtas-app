import React, { useState } from "react";
import { StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from 'expo-file-system';

import Input from '../components/Input/index'

export default function SignUp({ navigation }) {
    const [userName, setUserName] = useState('Misafir Kullanıcı');
    const [userSurname, setUserSurname] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userPassword, setUserPasword] = useState(null);
    const [userAdress, setuserAdress] = useState(null);

    const handleSubmit = async () => {
        if (!userName || !userSurname || !userMail || !userPassword || !userAdress) {
            Alert.alert('Bilgiler boş bırakılamaz!');
            return; //üye bilgilerinin sergilendiği sayfaya gitmiyor
        }

        const userData = {
            userName,
            userSurname,
            userMail,
            userPassword,
            userAdress
        }

        const fileUri = FileSystem.documentDirectory + 'user_data.json';
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(userData));
        navigation.navigate('Products', { screen: 'Koltuklar' })
    }

    /* normalde onChangeText = {text => setUserName(text)} yapmamız gerekirken react native'in sağladığı kolaylıkla böyle yazmamız yeterli */

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main_container}>
                <Input placeholder="Adınızı giriniz..." label="Adınız" onChangeText={setUserName} />
                <Input placeholder="Soyadınızı giriniz..." label="Soyadınız" onChangeText={setUserSurname} />
                <Input placeholder="Mail adresinizi giriniz..." label="Mail adresiniz" onChangeText={setUserMail} />
                <Input placeholder="Şifrenizi giriniz..." label="Şifreniz" onChangeText={setUserPasword} />
                <Input placeholder="Adresinizi giriniz..." label="Adresiniz" onChangeText={setuserAdress} />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.title}>Kaydı tamamla</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#eeeeee',
        flex: 1,
    },

    button: {
        borderRadius: 12,
        backgroundColor: '#A18A80',
        padding: 25,
        marginBottom: 16,
        marginTop: 16,
        marginRight: 60,
        marginLeft: 60,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
})