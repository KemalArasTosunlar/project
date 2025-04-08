import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = ({ navigation }) => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to DogLogbook</Text>
            {user ? (
                <>
                    <Text style={styles.greeting}>Hello, {user.email}!</Text>
                    <Button title="Log Out" onPress={logout} />
                </>
            ) : (
                <Button title="Log In" onPress={() => navigation.navigate('Login')} />
            )}
            <Button title="View Dogs" onPress={() => navigation.navigate('DogProfile')} />
            <Button title="Community" onPress={() => navigation.navigate('Community')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    greeting: {
        fontSize: 18,
        marginVertical: 10,
    },
});

export default HomeScreen;
