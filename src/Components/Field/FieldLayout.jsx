import styles from './Field.module.css';
import PropTypes from 'prop-types';
import { store } from '../../redux/store';
import React, { useEffect, useState } from 'react';

export function FieldLayout({ buttonClick }) {
	const { field } = store.getState();
	const [_, setRerender] = useState(0);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setRerender((prev) => prev + 1);
		});
		return () => unsubscribe();
	}, []);

	return (
		<ul className={styles.fieldUl}>
			{field.map((el, ind) => (
				<li key={ind} className={styles.fieldLi}>
					<button onClick={() => buttonClick(ind)}>{el}</button>
				</li>
			))}
		</ul>
	);
}

FieldLayout.propTypes = {
	buttonClick: PropTypes.func.isRequired,
};
