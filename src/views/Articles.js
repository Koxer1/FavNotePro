import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const articles = [
  {
    id: 1,
    title: 'Pierwszy artykuł',
    content:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    articleUrl: 'https://youtube.com/helloroman',
    created: '10 days',
  },
  {
    id: 2,
    title: 'Drugi artykuł',
    content:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ',
    articleUrl: 'https://youtube.com/helloroman',
    created: '5 days',
  },
  {
    id: 3,
    title: 'Trzeci artykuł',
    content:
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ',
    articleUrl: 'https://youtube.com/helloroman',
    created: '2 days',
  },
];

const Articles = () => (
  <GridTemplate pageType='articles'>
    {articles.map((article) => (
      <Card cardType='articles' key={article.id} {...article} />
    ))}
  </GridTemplate>
);

export default Articles;
