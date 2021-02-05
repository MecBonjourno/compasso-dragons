import api from '../services/api';

const data = {
	name: 'TestJ',
	type: 'testJs'
};

const dataEdit = {
	name: 'EditJ',
	type: 'EditJs'
};

const id = 1;

describe('Funções de Dragão', () => {
	it('Deve criar um Dragao', async () => {
		const result = await api.post(`/`, { name: data.name, type: data.type });
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('type');
	});

	it('Deve editar um Dragao existente', async () => {
		const result = await api.put(`/${id}`, { name: dataEdit.name, type: dataEdit.type });
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('type');
	});

	it('Deve deletar um Dragao existente', async () => {
		await api.delete(`/${id}`);
	});
});

export {};
