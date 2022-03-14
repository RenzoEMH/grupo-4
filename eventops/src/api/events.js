import axios from 'axios';

const API_SERVER = 'http://localhost:5000';

const ENDPOINTS = {
  GET_ALL: '/api/events',
  CREATE: '/api/events/create',
  UPDATE: '/api/events/update',
};

export const getAllEvents = async () => {
  const url = `${API_SERVER}${ENDPOINTS.GET_ALL}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = async (event) => {
  const url = `${API_SERVER}${ENDPOINTS.CREATE}`;

  try {
    const response = await axios.post(url, event);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = async ({ id, ...event }) => {
  const url = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;

  try {
    const response = await axios.put(url, event);
    return response;
  } catch (error) {
    console.log(error);
  }
};
