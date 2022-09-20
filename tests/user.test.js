/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { User } from '../components/user';

describe('<User />', () => {
    let component;
    const name = 'Isaac';
    const email = 'isaacfimbres@example.com';
    const mockHandler = jest.fn();

    beforeEach(() => {
        component = render(<User name={name} email={email} onClick={mockHandler}/>);
    });

    test('render', () => {
        component.getByText('Isaac');
        component.getByText('isaacfimbres@example.com');
    });

    test('click event', () => {
        const button = component.getByText('Click');
        fireEvent.click(button);
        fireEvent.click(button);
    
        expect(mockHandler).toHaveBeenCalledTimes(2);
    });
});