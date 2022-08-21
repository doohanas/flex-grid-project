import axios from 'axios';

export default {
  getData() {
    return axios.get('https://rickandmortyapi.com/api/character');
  },
};
