import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args}>{args.label}</Paragraph>;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Write something',
};
