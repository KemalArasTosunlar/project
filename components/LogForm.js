import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LogForm = ({ onSubmit }) => {
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = () => {
        onSubmit({ activity, duration });
        setActivity('');
        setDuration('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Activity:</Text>
            <TextInput
                style={styles.input}
                value={activity}
                onChangeText={setActivity}
                placeholder="Enter activity (e.g., Walk, Meal)"
            />
            <Text style={styles.label}>Duration (minutes):</Text>
            <TextInput
                style={styles.input}
                value={duration}
                onChangeText={setDuration}
                placeholder="Enter duration"
                keyboardType="numeric"
            />
            <Button title="Log Activity" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
});

export default LogForm;
