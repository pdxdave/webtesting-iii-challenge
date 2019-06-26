// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';


// Important Notes
// Keep in mind the diff b/t toHaveBeenCalled and toHaveBeenCalledTimes
// I also included a word doc with a visual of how each setting is


describe('<Controls', () => {

    it('this will toggle the close gate to the open gate position', () => {
        const gateControl = jest.fn(); // listens for an event trigger
        const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={gateControl}/>);
        const button = getByText(/close gate/i); // Looking for a button with this name
        fireEvent.click(button);
        expect(gateControl).toHaveBeenCalled(); // Use .toHaveBeenCalled to ensure that a mock function got called.
    });

    it('this will toggle the open gate to the close gate position', () => {
        const gateControl = jest.fn(); // listens for an event trigger
        const { getByText } = render(<Controls locked={false} closed={true} toggleClosed={gateControl} toggleLocked={gateControl}/>);
        const button = getByText(/open gate/i);
        fireEvent.click(button);
        expect(gateControl).toHaveBeenCalledTimes(1); //Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    });

    it('this will toggle the lock gate to the unlock gate position', () => {
        const gateControl = jest.fn(); // listens for an event trigger
        const { getByText } = render(<Controls locked={false} closed={true} toggleClosed={gateControl} toggleLocked={gateControl}/>);
        const button = getByText(/lock gate/i);
        fireEvent.click(button);
        expect(gateControl).toHaveBeenCalledTimes(1); //Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    });

    it('this will toggle the lock gate to the unlock gate position', () => {
        const gateControl = jest.fn(); // listens for an event trigger
        const { getByText } = render(<Controls locked={true} closed={true} toggleClosed={gateControl} toggleLocked={gateControl}/>);
        const button = getByText(/unlock gate/i);
        fireEvent.click(button);
        expect(gateControl).toHaveBeenCalledTimes(1); //Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    });
})