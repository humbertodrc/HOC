import React from 'react';
import styles from './styles/CardComents.module.css';
export interface CardComentsProps {
	coments: any;
}

const CardComents : React.FC<CardComentsProps> = ({coments}) => {
	return <div className={styles.cardcoments}>
		{coments.map((item: any) => (
			<div key={item.id}>
				<h3>{item.name}</h3>
				<p>{item.body}</p>
			</div>
			))}
	</div >;
};

export default CardComents;
