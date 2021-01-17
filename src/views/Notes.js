import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'The First Note Ever',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: 'The Second Note Ever',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    title: 'Remeber to:',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    title: 'Recips',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
  {
    id: 5,
    title: 'Playlist',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    title: 'My favourite',
    created: '1 day',
    content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
  },
];

const Notes = () => (
  <GridTemplate pageType='notes'>
    {notes.map((article) => (
      <Card cardType='notes' key={notes.id} {...article} />
    ))}
  </GridTemplate>
);

export default Notes;
