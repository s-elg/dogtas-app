import React from "react";
import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin: 20,
        borderRadius: 12,
    },

    info_container: {
        margin: 10,
    },

    image: {
        height: Dimensions.get('screen').height / 4,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },

    description_container: {
        flexDirection: 'row',
    },

    product_info: {
        padding: 5,
        flex: 1,
    },

    product_info_title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#5A5865'
    },

    product_description: {
        fontSize: 20,
        color: '#A18A80',
    },

    price_info: {
        padding: 5,
        alignItems: 'baseline'
    },

    price: {
        fontSize: 27,
        fontWeight: 'semibold',
        color: '#5A5865'
    },

    button_container: {
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#D9D9D9',
        padding: 12,
        width: 160,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 5,
    },

    button_title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
})