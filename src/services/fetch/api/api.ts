import axios from 'axios';

const API = 'http://localhost:3000/products';

type ApiType = {
  fetchData: () => Promise<Function>;
};

const api: ApiType = {
  async fetchData() {
    return axios.get(API);
  },
};

export default api;
