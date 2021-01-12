// YourComponent.stories.js

import React from 'react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const withAButton = () => (
  <Button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</Button>
);

export const Primary = () => <Button>Click</Button>;

export const Secondary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };

  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Button</Button>;
};
