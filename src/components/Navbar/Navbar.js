import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Navbar.style'

export default function Navbar({onPress}) {
    return (
        <View style={styles.navbar}>
            <Image source={require('../../../assets/big_logo.png')} style={styles.image} />
            <TouchableOpacity style={styles.user_button} onPress={onPress}>
                <Image source={require('../../../assets/user_net.png')} style={styles.user_image} resizeMode='cover' />
            </TouchableOpacity>
        </View>
    )
}