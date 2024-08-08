import React from "react";
import { View, Text, TextInput } from 'react-native';

import styles from './Input.style'

export default function Input({ label, placeholder, onChangeText, multiline, numberOfLines, inputMode, secureTextEntry}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.label}>{label}</Text>
            <View style = {styles.input_container}>
                <TextInput placeholder = {placeholder} onChangeText = {onChangeText} multiline = {multiline} numberOfLines={numberOfLines} inputMode={inputMode} secureTextEntry = {secureTextEntry} />
            </View>
        </View>
    )
}