import { InformationLayout } from './InformationLayout';

export function Information({ isDraw, isGameEnded, currentPlayer }) {
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	);
}
