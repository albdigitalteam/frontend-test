import React from 'react';
import {  render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import NotFound from 'pages/NotFound';

test('landing on a login page', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <NotFound />
        </Router>
    )
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
});