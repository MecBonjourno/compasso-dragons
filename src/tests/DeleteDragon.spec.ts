import api from '../services/api';

const id = 88;

describe("Delete de Dragão", () => {
    it('Deve deletar um Dragao existente', async() => {
     await api.delete(`/${id}`)
    })
  })
  
export {}