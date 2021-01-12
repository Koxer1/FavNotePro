// YourComponent.stories.js

import React from 'react';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Click</Button>;
export const Secondary = () => <Button secondary>Button</Button>;
