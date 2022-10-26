import React from 'react';
import styles from './styles/Spinner.module.css';
export interface SpinnerInterface {}

const Spinner : React.FC<SpinnerInterface> = () => {
	return <div className={styles.spinner}>Spinner</div >;
};

export default Spinner;
