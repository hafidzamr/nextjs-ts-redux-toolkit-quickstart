import React from 'react';
import { render, screen } from '../test-utils';
import Home from '@/pages/index';

describe('Home Pages', () => {
  test('Should be render', () => {
    render(<Home />);
    const getAText = screen.getByTestId('welcome');
    expect(getAText).toBeInTheDocument();
  });
});
