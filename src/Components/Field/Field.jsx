import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../constants/constants';
import { store } from '../../redux/store';
import React, { useEffect, useState } from 'react';

export function Field() {
	const { field, isGameEnded, currentPlayer } = store.getState();
	const [_, setRerender] = useState(0);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setRerender((prev) => prev + 1);
		});
		return () => unsubscribe();
	}, []);

	function checkWin(field, currentPlayer) {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return (
				field[a] === currentPlayer &&
				field[b] === currentPlayer &&
				field[c] === currentPlayer
			);
		});
	}

	function buttonClick(ind) {
		if (field[ind] || isGameEnded) {
			return;
		}

		const newField = [...field];
		newField[ind] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWin(newField, currentPlayer)) {
			store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return;
		}

		if (!newField.includes('')) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
			return;
		}

		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: currentPlayer === 'X' ? 'O' : 'X',
		});
	}

	return <FieldLayout buttonClick={buttonClick} />;
}
