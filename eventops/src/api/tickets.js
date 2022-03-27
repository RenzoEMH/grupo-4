import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_URL;

const ENDPOINTS = {
  GET_ALL: '/api/tickets',
};

export const getAllTickets = async () => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.GET_ALL}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
