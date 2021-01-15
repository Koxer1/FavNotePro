import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args}>{args.label}</Heading>;

export const Normal = Template.bind({});

Normal.args = {
  label: 'Write something',
  big: false,
};
