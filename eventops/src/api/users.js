const API_SERVER = process.env.REACT_APP_API_URL;

const ENDPOINTS = {
  GET_ALL: '/api/users',
  CREATE: '/api/users/create',
  LOGIN: '/api/login',
  UPDATE: '/api/users/update',
  LINK_PASS: '/api/recover_pass',
};

export const getAllUsers = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createUser = (user) => {
  const path = `${API_SERVER}${ENDPOINTS.CREATE}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const updateUser = ({ id, ...user }) => {
  const path = `${API_SERVER}${ENDPOINTS.UPDATE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const login = (user) => {
  const path = `${API_SERVER}${ENDPOINTS.LOGIN}`;

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // resolve({ token: data.token });
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const verifyEmail = (id, token) => {
  const path = `${API_SERVER}/api/users/${id}/verify/${token}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const generateLinkPass = (email) => {
  const path = `${API_SERVER}${ENDPOINTS.LINK_PASS}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const setNewPassword = (param) => {
  const path = `${API_SERVER}${ENDPOINTS.LINK_PASS}/${param.id}/${param.token}`;
  console.log(param, path);
  const pass = {
    password: param.password,
  };
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(pass),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
