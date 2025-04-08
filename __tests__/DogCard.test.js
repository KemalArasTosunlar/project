import React from 'react';
import { render } from '@testing-library/react-native';
import DogCard from '../components/DogCard';

describe('DogCard', () => {
    it('renders dog information correctly', () => {
        const dog = {
            name: 'Buddy',
            breed: 'Golden Retriever',
            birthday: '2020-01-01',
            photo: 'https://example.com/photo.jpg',
        };

        const { getByText } = render(<DogCard dog={dog} />);
        
        expect(getByText('Buddy')).toBeTruthy();
        expect(getByText('Breed: Golden Retriever')).toBeTruthy();
        expect(getByText('Birthday: 2020-01-01')).toBeTruthy();
    });
});
