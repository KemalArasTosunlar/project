import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ReminderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reminders</Text>
            {/* Logic to display and manage reminders will go here */}
            <Button title="Add Reminder" onPress={() => {/* Logic to add a reminder */}} />
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
});

export default ReminderScreen;
