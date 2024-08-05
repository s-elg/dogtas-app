import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    user_button: {
        backgroundColor: '#A18A80',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        marginLeft: 10,
        marginTop: 15,
        width: 181,
        height: 50,
    },

    user_image: {
        width: 28,
        height: 28,
    }
})