import { FC } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Loader.module.scss';

interface Props {
  width?: number;
  height?: number;
}

export const Loader: FC<Props> = ({ height = 40, width = 40 }) => {
  return <Loader2 className={styles.loader} height={height} width={width} />;
};
