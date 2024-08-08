import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


import styles from './Card.style';

const Card = (props) => {
    // Modal'ın görünürlük durumunu kontrol eden state
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Ürün resmini tıklanabilir hale getiren TouchableOpacity bileşeni */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                    source={{ uri: props.product.imgURL }}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Modal
                visible={modalVisible} // Modal'ın görünür olup olmadığını kontrol eder
                transparent={true} // Modal'ın arka planını şeffaf yapar
                onRequestClose={() => setModalVisible(false)} // Donanım geri düğmesine basıldığında modal'ı kapatır
                animationType="fade"  //resmin açılış ve kapanışında 
            >
                <ImageViewer
                    imageUrls={[{ url: props.product.imgURL }]} // Resim URL'sini belirler
                    onClick={() => setModalVisible(false)} // Modal'ı kapatır
                />

            </Modal>
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
