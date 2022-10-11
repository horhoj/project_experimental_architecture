import { FC } from 'react';
import { RequestError } from '../../store/types';
import styles from './RequestErrorView.module.scss';

interface RequestErrorViewProps {
  requestError: RequestError;
  errorTitle: string;
}

export const RequestErrorView: FC<RequestErrorViewProps> = ({
  requestError,
  errorTitle,
}) => {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.errorTitle}>{errorTitle}</h3>
      <pre className={styles.pre}>{JSON.stringify(requestError, null, 2)}</pre>
    </div>
  );
};
