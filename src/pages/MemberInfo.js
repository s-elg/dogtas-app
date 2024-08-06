import React, { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as FileSystem from 'expo-file-system';


export default function MemberInfo({ route, navigation }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            const fileUri = FileSystem.documentDirectory + 'user_data.json';
            const data = await FileSystem.readAsStringAsync(fileUri);
            setUserData(JSON.parse(data));
        };
        loadUserData();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main_container}>
                {userData ? (
                    <View style={styles.container}>
                        <View style={styles.image_container}>
                            <Image source={require('../../assets/user_big.png')} style={styles.image} />
                        </View>
                        <View style={styles.label_container}>
                            <Text style={styles.label}>ADINIZ: </Text>
                            <Text style={styles.info}>{userData.userName}</Text>
                            <Text style={styles.label}>SOYADINIZ: </Text>
                            <Text style={styles.info}>{userData.userSurname}</Text>
                            <Text style={styles.label}>MAIL ADRESİNİZ: </Text>
                            <Text style={styles.info}>{userData.userMail}</Text>
                            <Text style={styles.label}>ŞİFRENİZ: </Text>
                            <Text style={styles.info}>{userData.userPassword}</Text>
                            <Text style={styles.label}>ADRESİNİZ: </Text>
                            <Text style={styles.info}>{userData.userAdress}</Text>
                        </View>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.title}>Bilgilerini güncelle</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    image_container: {
        backgroundColor: '#D9D9D9',
        borderRadius: 75,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        alignSelf: 'center'
    },

    image: {
        width: 100,
        height: 100,
    },
    container: {
        margin: 25,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
    },

    main_container: {
        flex: 1,
       
    },

    label: {
        fontSize: 24,
        fontWeight: 'bold',
         color: '#5A5865'
    },

    info: {
        fontSize: 20,
        marginBottom: 20,
       
    },

    button1: {
        borderRadius: 12,
        backgroundColor: '#A18A80',
        padding: 25,
        marginBottom: 16
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
})