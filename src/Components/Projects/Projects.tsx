import React from 'react';

import CmcdNavBar from '../cmcdNavBar/cmcdNavBar';
import ConnorMcDermottPortfolioImage from '../../Image/Projects/connormcdermott_portfolio.png';

import style from './Projects.module.scss';

export interface Project {
  title: string;
  description: string;
  link: URL;
  image?: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
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
      <div className={style.container}>
        <h1 className={style.header}>Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <img src={project.image} alt={project.title} className={style.projectImage} />

            <div className={style.projectDescription}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link.toString()} target="_blank" rel="noopener noreferrer">
                Check it out!
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

