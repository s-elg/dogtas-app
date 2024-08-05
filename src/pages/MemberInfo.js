import React, {useState, useEffect} from "react";
import { Text, TouchableOpacity, View, } from 'react-native';
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
                    <View>
                        <Text>Adınız: {userData.userName}</Text>
                        <Text>Soyadınız: {userData.userSurname}</Text>
                        <Text>Mail adresiniz: {userData.userMail}</Text>
                        <Text>Şifreniz: {userData.userPassword}</Text>
                        <Text>Adresiniz: {userData.userAdress}</Text>
                    </View>
                ) : (
                    <Text>Loading...</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}