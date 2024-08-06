import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from './Card.style';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.product.imgURL }} style={styles.image} />
            <View style={styles.info_container}>
                <View style={styles.description_container}>
                    <View style={styles.product_info}>
                        <Text style={styles.product_info_title}>{props.product.title}</Text>
                        <Text style={styles.product_description}>{props.product.description}</Text>
                    </View>
                    <View style={styles.price_info}>
                        <Text style={styles.price}>{props.product.price}</Text>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.button_title}>Satın Al</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Card;
