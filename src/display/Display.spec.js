// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Display';

describe('<Display />' , () => {

    it('this will confirm that open sign is active', () => {
        const { getByText } = render(<Controls locked={false} closed={false} />); // see if item is T/F
        const selected = getByText(/Open/i); // This reflects that the green LED open sign is active
        expect(selected).toBeTruthy();
    });

    it('this will confirm that close sign is active', () => {
        const { getByText } = render(<Controls locked={false} closed={true} />);
        const selected = getByText(/Closed/i); // This reflects the red LED closed sign is active
        expect(selected).toBeTruthy();
    });

    it('this will confirm that Unlock sign is active', () => {
        const { getByText } = render(<Controls locked={false} closed={true} />);
        const selected = getByText(/Unlocked/i); // This reflects the red LED unlocked sign is active
        expect(selected).toBeTruthy();
    });

    it('this will confirm that lock sign is active', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);
        const selected = getByText(/Locked/i); // This reflects the red LED locked sign is active
        expect(selected).toBeTruthy();
    });
})