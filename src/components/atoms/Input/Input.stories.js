import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input placeholder='Login' {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  search: false,
};
