import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
};
export const Normal = () => <Heading>Test</Heading>;
export const Big = () => <Heading big>Big</Heading>;
