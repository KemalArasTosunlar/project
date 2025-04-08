import { db } from '../config/firebase'; // Assuming Firebase is configured

export const getDogs = async (userId) => {
    const dogsRef = db.collection('dogs').where('userId', '==', userId);
    const snapshot = await dogsRef.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addDog = async (dog) => {
    const dogsRef = db.collection('dogs');
    const docRef = await dogsRef.add(dog);
    return { id: docRef.id, ...dog };
};

export const updateDog = async (dogId, updatedDog) => {
    const dogRef = db.collection('dogs').doc(dogId);
    await dogRef.update(updatedDog);
};

export const deleteDog = async (dogId) => {
    const dogRef = db.collection('dogs').doc(dogId);
    await dogRef.delete();
};
