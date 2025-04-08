import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PostItem = ({ post }) => {
    return (
        <View style={styles.container}>
            {post.image && <Image source={{ uri: post.image }} style={styles.image} />}
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
        color: '#555',
    },
});

export default PostItem;
