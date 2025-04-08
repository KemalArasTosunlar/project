import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import ChatBubble from '../components/ChatBubble';

const ChatAIScreen = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSend = () => {
        // Logic to send message to AI and get response
        const response = "AI response to: " + message; // Placeholder for AI response
        setChatHistory([...chatHistory, { message, isUser: true }, { message: response, isUser: false }]);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={chatHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ChatBubble message={item.message} isUser={item.isUser} />}
            />
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Ask your question..."
            />
            <Button title="Send" onPress={handleSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default ChatAIScreen;
