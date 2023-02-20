import { FC } from 'react';

import { Task } from 'shared/api';

import styles from './TaskCard.styles.module.css';

interface TaskCardProps {
  data?: Task;
}

export const TaskCard: FC<TaskCardProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className={styles.root}>
      {data.title}
    </div>
  );
};
