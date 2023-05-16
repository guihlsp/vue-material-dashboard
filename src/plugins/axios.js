import axios from "axios";

const AxiosPlugin = {
  install: function (Vue) {
    const api = axios.create({
      baseURL: "http://localhost:8000/api", // substitua pela URL da sua API
    });

    api.interceptors.request.use(
      config => {
        const token = localStorage.getItem("token"); // Altere "token" para a chave correta no localStorage que armazena o token
        if (token) {
          config.headers.Authorization = token;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    Vue.prototype.$api = api;
  },
};

export default AxiosPlugin;
