import React from 'react';

import { HeadingTag, Tag } from '../index';

import { SkillsProps } from './index.props';
import styles from './index.module.css';

const Skills = ({ skills }: SkillsProps): JSX.Element => {
  return (
    <>
      <HeadingTag level="2">Получаемые навыки</HeadingTag>
      <ul className={styles.skillList}>
        {skills.map(skill => <li key={skill}>
          <Tag size="small" color="primary">{skill}</Tag>
        </li>)}
      </ul>
    </>
  );
};

export default Skills;
