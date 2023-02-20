import { FC, PropsWithChildren } from 'react';
import styles from './Row.styles.module.css';

export const Row: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
