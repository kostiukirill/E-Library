import React from 'react';
import { render } from 'react-dom';
import SearchForm from './searchForm';
import { store } from '../../../store/store';


jest.mock('axios')
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SearchForm store={store} />, div);
});