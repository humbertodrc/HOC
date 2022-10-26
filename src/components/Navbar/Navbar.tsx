import React from 'react';
import styles from './styles/Navbar.module.css';
export interface NavbarProps {
	handleShowData: any;
}

const Navbar : React.FC<NavbarProps> = ({handleShowData}) => {
	return <div className={styles.navbar}>
		<button onClick={handleShowData} >Post / Coments</button>
	</div >;
};

export default Navbar;
