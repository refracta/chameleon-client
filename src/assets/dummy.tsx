import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiCool, BiCreditCard, BiFolder, BiCartAlt, BiTransfer } from 'react-icons/bi';
import { GiArtificialHive } from 'react-icons/gi';
import tar from "./images/tar.png";
import dockerfile from "./images/dockerfile.png";

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
      {
        name: 'websocket',
        icon: <BiTransfer />,
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
    ],
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
    desc: 'My ExecuteModel Lists',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
];

export const myModel = {
  header: ['Model Name', 'Input Type', 'Output Type', 'Developer', 'Last Modified Date', 'Size', ''],
  data: [
    {
      name: 'Model01',
      link: 'model01',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model0223123',
      link: 'model02',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model03',
      link: 'model03',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model04',
      link: 'model04',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model05',
      link: 'model05',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model06',
      link: 'model06',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model07',
      link: 'model07',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model08',
      link: 'model08',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
    {
      name: 'Model09',
      link: 'model09',
      input: 'text',
      output: 'binary',
      developer: '최수연',
      date: '2023.01.20.',
      size: '20KB',
    },
  ],
}

export const tabsData = [
  {
    label: "TarFile",
    content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    img : tar
  },
  {
    label: "DockerFile",
    content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    img : dockerfile
  },
  {
    label: "Etc",
    content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];