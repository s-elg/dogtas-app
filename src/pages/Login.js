import React from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.main_container}>
                <View style={styles.container}>
                    <Image source={require('../../assets/big_logo.png')} style={styles.image} />
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.title}>Üye ol</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Products', { screen: 'Koltuklar' })}>
                            <Text style={styles.title}>Üye olmadan devam et</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#eeeeee',
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button_container: {
        marginTop: 45,
        margin: 25,
    },

    image: {
        width: 350,
        height: 100,
        shadowColor: '#000000'
    },

    button1: {
        borderRadius: 12,
        backgroundColor: '#A18A80',
        padding: 25,
        marginBottom: 16
    },

    button2: {
        borderRadius: 12,
        backgroundColor: '#D9D9D9',
        padding: 25,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white'
    },
})