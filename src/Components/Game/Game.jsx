import React from 'react';
import { GameLayout } from './GameLayout';
import { store } from '../../redux/store';

export function Game() {
	return <GameLayout handleClick={() => store.dispatch({ type: 'SET_RESTARTGAME' })} />;
}
