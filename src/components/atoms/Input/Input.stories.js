import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Normal = () => <Input placeholder='login' />;
export const Big = () => <Input placeholder='search' search />;
