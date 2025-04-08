import React from 'react';
import { render } from '@testing-library/react-native';
import PostItem from '../components/PostItem';

describe('PostItem', () => {
    it('renders post information correctly', () => {
        const post = {
            title: 'My Dog is Amazing!',
            content: 'I just wanted to share how great my dog is!',
            image: 'https://example.com/dog.jpg',
        };

        const { getByText } = render(<PostItem post={post} />);
        
        expect(getByText('My Dog is Amazing!')).toBeTruthy();
        expect(getByText('I just wanted to share how great my dog is!')).toBeTruthy();
    });
});
