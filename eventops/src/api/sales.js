import axios from 'axios';

const API_SERVER = 'http://localhost:5000';

const ENDPOINTS = {
  CREATE: '/api/sales/create',
};

export const createSale = async (data) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.CREATE}`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
