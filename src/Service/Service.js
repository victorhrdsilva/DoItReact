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
  console.log(body)
  return promise;
};

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${url}habits`, config);
  return promise;
};


function delectHabit(id) {
  const config = createHeaders();
  const promise = axios.delete(`${url}habits/${id}`, config);
  return promise;
}

function getHabitsToday() {
  const config = createHeaders();
  const promise = axios.get(`${url}habits/today`, config);
  return promise;
};

function setHabitsTodayDone(id) {
  const config = createHeaders();
  const promise = axios.post(`${url}habits/${id}/check`, {}, config);
  return promise;
};

function setHabitsTodayUndone(id) {
  const config = createHeaders();
  const promise = axios.post(`${url}habits/${id}/uncheck`, {}, config);
  return promise;
};

export { login, create, getHabits, register, delectHabit, getHabitsToday, setHabitsTodayDone, setHabitsTodayUndone };