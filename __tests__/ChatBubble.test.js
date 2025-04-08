import React from 'react';
import { render } from '@testing-library/react-native';
import ChatBubble from '../components/ChatBubble';

describe('ChatBubble', () => {
    it('renders user and AI messages correctly', () => {
        const { getByText } = render(<ChatBubble message="Hello!" isUser={true} />);
        expect(getByText('Hello!')).toBeTruthy();

        const { getByText: getByTextAI } = render(<ChatBubble message="Hi there!" isUser={false} />);
        expect(getByTextAI('Hi there!')).toBeTruthy();
    });
});
