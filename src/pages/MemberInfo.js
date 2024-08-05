import React, {useState, useEffect} from "react";
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
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
            <SafeAreaView>
                {userData ? (
                    <View style = {styles.container}>
                        <Text style = {styles.label}>ADINIZ: {userData.userName}</Text>
                        <Text style = {styles.label}>SOYADINIZ: {userData.userSurname}</Text>
                        <Text style = {styles.label}>MAIL ADRESİNİZ: {userData.userMail}</Text>
                        <Text style = {styles.label}>ŞİFRENİZ: {userData.userPassword}</Text>
                        <Text style = {styles.label}>ADRESİNİZ: {userData.userAdress}</Text>
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 25,

    },

    label: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})