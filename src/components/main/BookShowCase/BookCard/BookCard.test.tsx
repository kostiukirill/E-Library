import React from 'react';
import { render } from 'react-dom';
import { store } from '../../../../store/store';
import BookCard from './BookCard';


jest.mock('axios')
it('renders without crashing', () => {
  const test = () => {console.log('test')}
  const div = document.createElement('div');
  render(<BookCard store={store} title={''} handleNavigate={test} id={''} authors={[]} categories={[]} description={''} publishedDate={''} type={'CHANGE_SEARCH_INPUT_VALUE'} />, div);
});