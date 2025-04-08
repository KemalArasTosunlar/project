import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { DogContext } from '../contexts/DogContext';
import LogForm from '../components/LogForm';

const LogbookScreen = () => {
    const { dogs } = useContext(DogContext);

    const handleLogSubmit = (log) => {
        // Logic to handle log submission
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logbook</Text>
            <LogForm onSubmit={handleLogSubmit} />
            <FlatList
                data={dogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.dogContainer}>
                        <Text style={styles.dogName}>{item.name}</Text>
                        {/* Display logs for each dog */}
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

export default LogbookScreen;
