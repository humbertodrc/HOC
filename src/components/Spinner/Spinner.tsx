import React from "react";
import styles from "./styles/Spinner.module.css";
export interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = () => {
	return <span className={styles.loader}></span>;
};

export default Spinner;
