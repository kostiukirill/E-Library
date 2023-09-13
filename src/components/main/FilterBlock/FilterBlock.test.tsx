import React from 'react';
import { render } from 'react-dom';

import { store } from '../../../store/store';
import FilterBlock from './FilterBlock';


jest.mock('axios')
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<FilterBlock store={store}/>, div);
});