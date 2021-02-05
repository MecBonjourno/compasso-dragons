import { capitalizeFirstLetter } from './Capitalize';
import { DateForm } from './Date';

describe('Testes unitários das funções Utils', () => {
	it("Deve deixar a primeira letra em Maiusculo'", () => {
		expect(capitalizeFirstLetter('zago')).toBe('Zago');
	});

	it('Deve Arrumar a Data recebida', () => {
		expect(DateForm('')).toBe('');
	});
});

export {}