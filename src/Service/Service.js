import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"
let config = {
  headers: {
    Authorization: ``
  }
}

function createHeaders() {
    const auth = localStorage.getItem("happenToken");
    config = {
      headers: {
        Authorization: `Bearer ${auth}`
      }
    };
    console.log(config)
    return config;

};

function login(body) {
  const promise = axios.post(`${url}auth/login`, body);
  return promise;
};

function register(body) {
  const promise = axios.post(`${url}auth/sign-up`, body);
  promise.then(console.log(promise.data))
  return promise;
};

function create(body) {
  const config = createHeaders();
  const promise = axios.post(`${url}habits`, body, config);
  return promise;
};

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${url}habits`, config);
  return promise;
};

export { login, create, getHabits, register };