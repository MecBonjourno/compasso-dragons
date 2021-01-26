import api from '../services/api';

const data = {
    name: 'TestJ', 
    type: 'test',
}

describe("Criação de Dragão", () => {
    it('Deve Criar um novo Dragao', async() => {
    const result = await api.post('/' , { name: data.name, type: data.type})
    expect(result.data).toHaveProperty('name');
    expect(result.data).toHaveProperty('type');
    })
  })
  
export {}