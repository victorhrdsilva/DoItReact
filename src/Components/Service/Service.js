import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"

function createHeaders() {
    const auth = localStorage.getItem("happenToken");
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    };
    
    return config;
};

function login(body) {
  const promise = axios.post(`${url}auth/login`, body);
  return promise;
};

function register(body) {
  const promise = axios.post(`${url}auth/sign-up`, body);
  return promise;
};

function create(body) {
  const config = createHeaders();
  const promise = axios.post(`${url}/habits`, body, config);
  return promise;
};

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${url}/habits`, config);
  return promise;
};

export { login, create, getHabits, register };