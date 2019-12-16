import React from 'react';
import * as rtl from '@testing-library/react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

afterEach(rtl.cleanup);

test('renders hits text', () => {
  const wrapper = rtl.render(<Display />);
  const element = wrapper.getByText(/Hits/i);
  expect(element).toBeVisible();
})

test('renders reset game button', () => {
  const wrapper = rtl.render(<Dashboard />);
  const element = wrapper.queryByText(/Reset game/i);
  expect(element).toBeVisible();
})
