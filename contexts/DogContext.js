import React, { createContext, useState, useEffect } from 'react';
import { getDogs } from '../services/dog'; // Assuming dog service is set up

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchDogs = async () => {
            const dogData = await getDogs();
            setDogs(dogData);
        };
        fetchDogs();
    }, []);

    const addDog = async (dog) => {
        // Implement logic to add a dog
    };

    const updateDog = async (dogId, updatedDog) => {
        // Implement logic to update a dog
    };

    const deleteDog = async (dogId) => {
        // Implement logic to delete a dog
    };

    return (
        <DogContext.Provider value={{ dogs, addDog, updateDog, deleteDog }}>
            {children}
        </DogContext.Provider>
    );
};
