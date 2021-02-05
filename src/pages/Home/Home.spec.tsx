import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Link } from 'react-router-dom';

describe('testes unitários componente Feedback', () => {
	const mockedFunction = jest.fn();

	const createHomeComponent = () => {
		const history = createMemoryHistory();
		return {
			...render(
				<>
					<header>
						<a href="/createDragon">
						<button data-testid='go-to-create' onClick={mockedFunction}>
							<img
								data-testid='icon'
								alt='Icon'
								style={{ maxHeight: 46, maxWidth: 46 }}
							/>
						</button>
						</a>
						<h3>user.name</h3>
					</header>
				</>
			),
			history
		};
	};

	it('deve validar se botões renderizados estão sendo clicados', () => {
		const history = createMemoryHistory();
		const { getByTestId } = createHomeComponent();

		const primaryButton = getByTestId('go-to-create');

		fireEvent.click(primaryButton);
		expect(mockedFunction).toHaveBeenCalledTimes(1);
	});
});
