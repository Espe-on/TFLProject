import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render app and check if header is present', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/tfl api app/i);
  expect(linkElement).toBeInTheDocument();
});
