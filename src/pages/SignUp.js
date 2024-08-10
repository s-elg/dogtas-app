import React, { useState } from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, Keyboard } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import Input from '../components/Input/index'

import * as FileSystem from 'expo-file-system';

export default function SignUp({ navigation }) {
    const [userName, setUserName] = useState('Misafir Kullanıcı');
    const [userSurname, setUserSurname] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userPassword, setUserPasword] = useState(null);
    const [userAdress, setuserAdress] = useState(null);

    const handleSubmit = async () => {
        if (!userName || !userSurname || !userMail || !userPassword || !userAdress) { 
            //bilgilerin boş olmamasını istiyorum
            Alert.alert('Bilgiler boş bırakılamaz!');
            return; //üye bilgilerinin sergilendiği sayfaya gitmiyor
        } else if (!(userMail.endsWith('@gmail.com') || userMail.endsWith('@hotmail.com') || userMail.endsWith('@yahoo.com') || userMail.endsWith('@icloud.com'))) { 
            //domain kontorlü
            Alert.alert('Mailiniz şu uzantılardan birini içermelidir:', '@gmail.com, @hotmail.com, @yahoo.com veya @icloud.com');
            return;
        } else if (userPassword.length < 8) {
            //şifrenin karakter uzunluğunu belirledim
            Alert.alert('Şifreniz en kısa 8 karakter uzunluğunda olmalı');
            return;
        }

        const userData = {
            userName,
            userSurname,
            userMail,
            userPassword,
            userAdress
        }

        const fileUri = FileSystem.documentDirectory + 'user_data.json';
        // Dosya yolunu belirtiyoruz. Dosya FileSystem paketindeki documentDirectory dizininde oluşturulacak.
        
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(userData));
        // FileSystem pakeetinden writeAsStringAsync fonksiyonu ile verileri json dosyasına yazıyoruz.
        // Bu işlem, asenkron olarak gerçekleşir, yani dosyaya yazma işlemi tamamlanana kadar beklenir (await).

        navigation.navigate('Products', { screen: 'Koltuklar' })
        //Products tab navigation yapısındaki Koltuklar ekranına yönlendirdil
    }

    /* normalde onChangeText = {text => setUserName(text)} yapmamız gerekirken react native'in sağladığı kolaylıkla böyle yazmamız yeterli */
    /* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}> klavye açıldığında inputların 
    görünebilmesi için, platforma göre height ve padding bileşenlerini alır*/
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}> klavye açıkken başka yere dokunduğumda klavyenin kapanması için
    // <ScrollView contentContainerStyle={styles.scrollViewContent}></ScrollView> içeriğin kaydırılabilir olmasını sağlar, klavye açıldığında bile içerik görüntülenebilir olur


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main_container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Input placeholder='Adınızı giriniz...' label='Adınız' onChangeText={setUserName} inputMode='text' />
                            <Input placeholder='Soyadınızı giriniz...' label='Soyadınız' onChangeText={setUserSurname} inputMode='text' />
                            <Input placeholder='Mail adresinizi giriniz...' label='Mail adresiniz' onChangeText={setUserMail} inputMode='email' />
                            <Input placeholder='Şifrenizi giriniz...' label='Şifreniz' onChangeText={setUserPasword} secureTextEntry={true} />
                            <Input placeholder='Adresinizi giriniz...' label='Adresiniz' onChangeText={setuserAdress} multiline={true} numberOfLines={3} />
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.title}>Kaydı tamamla</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollViewContent: {
        flexGrow: 1,
    },

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