import api from '../services/api';

const data = {
    name: 'EditJ', 
    type: 'EditJs',
}

const id = 89;

describe("Edição de Dragão", () => {
    it('Deve editar um Dragao existente', async() => {
    const result = await api.put(`/${id}` , { name: data.name, type: data.type})
    expect(result.data).toHaveProperty('name');
    expect(result.data).toHaveProperty('type');
    })
  })
  
export {}