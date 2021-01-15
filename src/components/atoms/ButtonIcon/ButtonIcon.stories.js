import React from 'react';
import styled from 'styled-components';

import ButtonIcon from './ButtonIcon';

import Plus from '../../../assets/icons/plus.svg';
import Bulb from '../../../assets/icons/bulb.svg';
import LogOut from '../../../assets/icons/logout.svg';
import Pen from '../../../assets/icons/pen.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Search from '../../../assets/magnifier.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.note};
`;

const iconMap = { Bulb, LogOut, Pen, Plus, Twitter, Search };

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    icon: {
      control: {
        type: 'inline-radio',
        options: Object.keys(iconMap),
      },
    },
  },
};

// eslint-disable-next-line react/prop-types
const Template = ({ icon, ...rest }) => {
  const selectedIcon = iconMap[icon];

  return <ButtonIcon icon={selectedIcon} {...rest} />;
};

export const Primary = Template.bind({});
export const Yellow = Template.bind({});

Primary.args = {
  active: false,
};
Yellow.args = {
  active: false,
};

Yellow.decorators = [
  (Story) => (
    <YellowBackground>
      <Story />
    </YellowBackground>
  ),
];
