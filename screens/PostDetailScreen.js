import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostDetailScreen = ({ route }) => {
    const { post } = route.params; // Assuming post data is passed as a parameter

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <Button title="Comment" onPress={() => {/* Logic to add a comment */}} />
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
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default PostDetailScreen;
