import { db } from '../config/firebase'; // Assuming Firebase is configured

export const getPosts = async () => {
    const postsRef = db.collection('community');
    const snapshot = await postsRef.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addPost = async (post) => {
    const postsRef = db.collection('community');
    const docRef = await postsRef.add(post);
    return { id: docRef.id, ...post };
};

export const deletePost = async (postId) => {
    const postRef = db.collection('community').doc(postId);
    await postRef.delete();
};
