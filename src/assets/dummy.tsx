import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiColorFill, BiCool, BiCreditCard, BiFolder, BiCartAlt } from 'react-icons/bi';
import { GiArtificialHive } from 'react-icons/gi';

export const links = [
  {
    title: 'Marketplace',
    links: [
      {
        name: 'main',
        icon: <BiCartAlt />,
      },
    ],
  },
  {
    title: 'Models',
    links: [
      {
        name: 'model',
        icon: <BiFolder />,
      },
    ],
  },
  {
    title: 'My Profile',
    links: [
      {
        name: 'account',
        icon: <BiCool />,
      },
      {
        name: 'payment',
        icon: <BiCreditCard />,
      },
      {
        name: 'websocket',
        icon: <BiColorFill />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsFillPersonLinesFill />,
    title: 'My Profile',
    name: 'account',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <GiArtificialHive />,
    title: 'My Models',
    name: 'model',
    desc: 'My Model Lists',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
];