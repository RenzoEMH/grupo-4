import axios from 'axios';

const API_SERVER = 'http://localhost:5000';

const ENDPOINTS = {
  GET_ALL: '/api/slides',
  CREATE: '/api/slides/create',
  UPDATE_ALL_ORDERS_CREATE: '/api/slides/reorder-create',
  UPDATE: '/api/slides/update',
  UPDATE_ALL: '/api/slides/update-all',
  DELETE: '/api/slides/delete',
  UPDATE_ALL_ORDERS_DELETE: '/api/slides/reorder-delete',
};

// Get all
export const getAllSlides = async () => {
  const url = `${API_SERVER}${ENDPOINTS.GET_ALL}`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
};

// create
export const createSlide = async (slide) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.CREATE}`;

  try {
    const response = await axios.post(url, slide, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// update all slides' orders, then create
export const updateAllOrdersCreate = async (slide) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.UPDATE_ALL_ORDERS_CREATE}`;

  try {
    const response = await axios.post(url, slide, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// update
export const updateSlide = async ({ id, slide }) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;

  try {
    const response = await axios.put(url, slide, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// update all slides
export const updateAllSlides = async ({ id, slide }) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.UPDATE_ALL}/${id}`;

  try {
    const response = await axios.put(url, slide, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// delete
export const deleteSlide = async (id) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.DELETE}/${id}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// update and delete
export const updateAllOrdersDeleteOne = async (id) => {
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  const url = `${API_SERVER}${ENDPOINTS.UPDATE_ALL_ORDERS_DELETE}/${id}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
