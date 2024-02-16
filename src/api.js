import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    console.log("인터셉트 요청");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 나만 못 받음?");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답");
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 나만 못 받음?");
    return Promise.reject(error);
  }
);

export default api;
