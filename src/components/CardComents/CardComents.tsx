import React from 'react';
import styles from './styles/CardComents.module.css';
export interface CardComentsProps {
	data?: any;
}

const CardComents : React.FC<CardComentsProps> = ({data}) => {
	return <div className={styles.cardcoments}>
		{data.map((item: any) => (
			<div key={item.id}>
				<h3>{item.name}</h3>
				<p>{item.body}</p>
			</div>
			))}
	</div >;
};

export default CardComents;
