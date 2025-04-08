import React, { createContext, useState, useEffect } from 'react';
import { getPosts } from '../services/community'; // Assuming community service is set up

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getPosts();
            setPosts(postData);
        };
        fetchPosts();
    }, []);

    const addPost = async (post) => {
        // Implement logic to add a post
    };

    const deletePost = async (postId) => {
        // Implement logic to delete a post
    };

    return (
        <CommunityContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </CommunityContext.Provider>
    );
};
