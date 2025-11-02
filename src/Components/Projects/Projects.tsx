import React from 'react';

import CmcdNavBar from '../cmcdNavBar/cmcdNavBar';
import ConnorMcDermottPortfolioImage from '../../Images/Projects/connormcdermott_portfolio.png';

import style from './Projects.module.scss';

export interface Project {
  title: string;
  description: string;
  link: URL;
  image?: string;
}

export const Projects: React.FC = () => {
  const Projects: Project[] = [
    {
      title: 'connormcdermott.me',
      description: 'My personal website built with React and TypeScript.',
      link: new URL('https://github.com/cmcderm.github.io'),
      image: ConnorMcDermottPortfolioImage,
    },
    {
      title: 'Project 2',
      description: "Description for Project 2",
      link: new URL('https://example.com/project2'),
      image: undefined,
    }
  ]

  return (
    <>
      <CmcdNavBar />
      <div>
        <h1 className={style.header}>Projects</h1>


      </div>
    </>
  );
};

