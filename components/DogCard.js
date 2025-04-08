import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DogCard = ({ dog }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: dog.photo }} style={styles.image} />
            <Text style={styles.name}>{dog.name}</Text>
            <Text style={styles.details}>Breed: {dog.breed}</Text>
            <Text style={styles.details}>Birthday: {dog.birthday}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 14,
        color: '#555',
    },
});

export default DogCard;
