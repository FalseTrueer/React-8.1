import { InformationLayout } from './InformationLayout';
import { store } from '../../redux/store';
import React, { useEffect, useState } from 'react';

export function Information() {
	const { isDraw, isGameEnded, currentPlayer } = store.getState();
	const [_, setRerender] = useState(0);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setRerender((prev) => prev + 1);
		});
		return () => unsubscribe();
	}, []);

	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
}
