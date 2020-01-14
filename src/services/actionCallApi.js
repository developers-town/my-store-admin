import axios from "axios";
import ENV from "../config/config.json";

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem(ENV.APP_TOKEN);
    if (token) {
      config.headers["x-store"] = token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export async function actionGet(model) {
  try {
    const response = await axios.get(ENV.API_ENDPOINT + model);
    return response;
  } catch (error) {
    if (error) {
      window.localStorage.removeItem("userToken");
      window.location.href = "/";
    }
  }
}
export async function actionPost(model, body) {
  const response = await axios.post(ENV.API_ENDPOINT + model, body);
  return response;
}
export async function actionPut(model, body) {
  const response = await axios.put(ENV.API_ENDPOINT + model, body);
  return response;
}
