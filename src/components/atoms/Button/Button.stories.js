/* eslint-disable react/prop-types */
import React from 'react';

import Button from './Button';

const Note = 'hsl(49, 100%, 58%)';
const Twitter = 'hsl(196, 83%, 75%)';
const Article = 'hsl(106, 47%, 64%)';

const colors = { Note, Twitter, Article };

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
};

const Template = ({ color, ...args }) => {
  const selectedColor = colors[color];

  return (
    <Button color={selectedColor} {...args}>
      {args.label}
    </Button>
  );
};

export const Normal = Template.bind({});

Normal.args = {
  secondary: false,
  label: 'Button',
  color: 'select',
};

// export const Primary = () => {
//   const label = 'Colors';
//   const options = {
//     Primary: 'hsl(49, 100%, 58%)',
//     Secondary: 'hsl(196, 83%, 75%)',
//     Tertiary: 'hsl(106, 47%, 64%)',
//   };

//   const defaultValue = 'hsl(49, 100%, 58%)';
//   const groupId = 'GROUP-ID1';

//   const value = select(label, options, defaultValue, groupId);

//   return <Button color={value}>Button</Button>;
// };

// export const Secondary = () => <Button secondary>Click</Button>;
