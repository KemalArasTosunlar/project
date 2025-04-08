import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LogForm from '../components/LogForm';

describe('LogForm', () => {
    it('submits the form with activity and duration', () => {
        const mockOnSubmit = jest.fn();
        const { getByPlaceholderText, getByText } = render(<LogForm onSubmit={mockOnSubmit} />);

        fireEvent.changeText(getByPlaceholderText('Enter activity (e.g., Walk, Meal)'), 'Walk');
        fireEvent.changeText(getByPlaceholderText('Enter duration'), '30');
        fireEvent.press(getByText('Log Activity'));

        expect(mockOnSubmit).toHaveBeenCalledWith({ activity: 'Walk', duration: '30' });
    });
});
