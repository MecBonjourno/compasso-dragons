import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

describe('testes unitários componente Feedback', () => {
	const mockedFunction = jest.fn();
	const mockedFunction2 = jest.fn();

	const createDragonComponent = () => {
		const history = createMemoryHistory();
		return {
			...render(
				<>
					<div className='container'>
						<div className='avatar-flip'>
							<img alt='Icon' height='150' width='150' />
						</div>
						<h2>dragon.name</h2>
						<h4>dragon.type</h4>
						<p>Dragon ID: dragon.id</p>
						<p>dragon.createdAt</p>
					</div>

					<form className='formEdit'>
						<input
							className='allInputs'
							type='text'
							placeholder='Nome'
						></input>
						<input
							className='allInputs'
							type='text'
							placeholder='Tipo'
						></input>
					</form>

					<div className='divButtons'>
						<button className='buttonEdit' data-testid="edit" onClick={mockedFunction}>
							Edit
						</button>
						<button className='buttonDelete' data-testid="delete">
							Delete
						</button>
					</div>
		</>
			),
			history
		};
	};

	it('deve validar se o botão de edição foi renderizado e clicado', () => {
		const history = createMemoryHistory();
		const { getByTestId } = createDragonComponent();

		const primaryButton = getByTestId('edit');
		const secondaryButton = getByTestId('delete');

		fireEvent.click(primaryButton);
		expect(mockedFunction).toHaveBeenCalledTimes(1);

		fireEvent.click(secondaryButton);
		expect(mockedFunction2).toHaveBeenCalledTimes(0);
	});
});
