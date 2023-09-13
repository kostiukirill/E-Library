import React from 'react';
import { render } from 'react-dom';

import { store } from '../../../store/store';
import BookShowCase from './BookShowCase';


jest.mock('axios')
it('renders without crashing', () => {
  const test = () => {console.log('test')}
  const div = document.createElement('div');
  render(<BookShowCase store={store} handleNavigate={test} type={'CHANGE_SEARCH_INPUT_VALUE'}/>, div);
});