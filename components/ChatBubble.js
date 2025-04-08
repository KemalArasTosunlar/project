import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isUser }) => {
    return (
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bubble: {
        borderRadius: 15,
        padding: 10,
        margin: 5,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: '#d1f0d1',
        alignSelf: 'flex-end',
    },
    aiBubble: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
});

export default ChatBubble;
