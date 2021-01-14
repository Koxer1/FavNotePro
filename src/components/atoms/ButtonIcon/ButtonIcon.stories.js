import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ButtonIcon from './ButtonIcon';
import plusIcon from '../../../assets/icons/plus.svg';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logOutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import magnifierIcon from '../../../assets/magnifier.svg';

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorator: [withKnobs],
};

export const Normal = () => {
  const label = 'Type';
  const options = {
    Plus: plusIcon,
    Bulb: bulbIcon,
    LogOut: logOutIcon,
    Pen: penIcon,
    Twitter: twitterIcon,
    Search: magnifierIcon,
  };
  const defaultValue = plusIcon;
  const groupId = 'GROUP_ID2';

  const value = select(label, options, defaultValue, groupId);

  return <ButtonIcon icon={value} />;
};
