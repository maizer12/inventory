import { FC } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './Loader.module.scss';

interface Props {
  width?: number;
  height?: number;
  full?: boolean;
  className?: string;
}

export const Loader: FC<Props> = ({ height = 40, width = 40, full, className }) => {
  if (full) {
    return (
      <div className={styles['loader-full'] + ' anim-opacity'}>
        <Loader2 className={styles.loader + ` ${className}`} height={height} width={width} />
      </div>
    );
  }

  return <Loader2 className={styles.loader + ` ${className} anim-opacity`} height={height} width={width} />;
};
