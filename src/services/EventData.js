import axios from 'axios';

export default {
  getData() {
    return axios.get('https://rickandmortyapi.com/api/character')
      .then((response) => console.log(response))
      .catch((err) => err);
  },
};
