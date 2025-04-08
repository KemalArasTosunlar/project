import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { DogContext } from '../contexts/DogContext';

const DogProfileScreen = () => {
    const { dogs } = useContext(DogContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dog Profiles</Text>
            <FlatList
                data={dogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.dogContainer}>
                        <Text style={styles.dogName}>{item.name}</Text>
                        <Button title="Edit" onPress={() => {/* Logic to edit dog profile */}} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dogContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dogName: {
        fontSize: 18,
    },
});

export default DogProfileScreen;
