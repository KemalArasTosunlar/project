import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CommunityContext } from '../contexts/CommunityContext';
import PostItem from '../components/PostItem';

const CommunityScreen = () => {
    const { posts } = useContext(CommunityContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Community Posts</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostItem post={item} />}
            />
            <Button title="Add Post" onPress={() => {/* Logic to add a post */}} />
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

export default CommunityScreen;
