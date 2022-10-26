import React from 'react';
import styles from './styles/CardPost.module.css';
export interface CardPostProps {
	data?: any;
}

const CardPost: React.FC<CardPostProps> = ({ data }) => {
	
	return <div className={styles.cardpost}>
		{data.map((item: any) => (
			<div key={item.id}>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
			</div>
			))}

	</div >;
};

export default CardPost;
