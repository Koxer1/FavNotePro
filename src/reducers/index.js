/* eslint-disable no-undef */
/* eslint-disable no-console */

const initialState = {
  notes: [
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
  ],
  twitters: [
    {
      id: 1,
      title: 'Konrad Łomzik',
      created: '1 day',
      image: 'https://pbs.twimg.com/profile_images/1174375783718166529/WK0LDC2P_400x400.jpg',
      twitterName: 'KKoxer',
      content: 'Fajny gość',
    },
    {
      id: 2,
      title: 'Kacper Prokop',
      created: '5 days',
      image:
        'https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-1/p480x480/73497851_2481962918555865_1538534191111602176_o.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_ohc=5ify4acNBesAX9TnGDu&_nc_ht=scontent.fosl3-2.fna&tp=6&oh=330dc13a1f1703b8a1de9cb180e4c050&oe=6028C38C',
      content: 'Głupi gość',
    },
    {
      id: 3,
      title: 'Weronika Zaremba',
      created: '10 days',
      image:
        'https://scontent.fosl3-1.fna.fbcdn.net/v/t1.0-1/p480x480/89767935_1412643985604145_2233287443782565888_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=pOejU80TXDkAX-Up5hS&_nc_ht=scontent.fosl3-1.fna&tp=6&oh=0a103093fcbe223571e79a5f20dc4664&oe=6026D03A',
      content: 'Spoko dupa',
    },
    {
      id: 4,
      title: 'Natalia Zaremba',
      created: '7 days',
      image:
        'https://scontent.fosl3-1.fna.fbcdn.net/v/t1.0-1/p480x480/117642809_3127253644017407_3048849854698122355_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=4-Hv8iAiQp0AX-S6_dc&_nc_ht=scontent.fosl3-1.fna&tp=6&oh=a342dd0abab40de98f0429dd65d3b973&oe=602A60E9',
      content: 'Narzeczona tego głupiego',
    },
  ],
  articles: [
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
  ],
};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
