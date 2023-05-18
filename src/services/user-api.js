import axios from 'axios';

axios.defaults.baseURL = 'https://64654ac6228bd07b35478ed6.mockapi.io';

export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
