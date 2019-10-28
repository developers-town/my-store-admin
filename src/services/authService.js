import axios from "axios";
// import {apiEndpoint} from "../config.json";
import jwtDecode from "jwt-decode";

export async function login(email, password) {
  try {
    return axios
      .post(process.env.REACT_APP_API_ENDPOINT + "/staff/login", {
        email,
        password
      })
      .then(response => {
        localStorage.setItem(process.env.REACT_APP_TOKEN, response.data.payload.token);
      })
      .catch(ex => {
        console.log(ex);
        throw new Error(ex);
      });
  } catch (ex) {
    throw new Error(ex);
  }
}

export function getCurrentUser() {
  const jwt = localStorage.getItem(process.env.REACT_APP_TOKEN);
  try {
    const user = jwtDecode(jwt);
    // console.log(user);
    return user.id;
  } catch (ex) {
    // console.log(ex);
    return null;
  }
}

export function logout() {
  localStorage.removeItem(process.env.REACT_APP_TOKEN);
}

export default {
  logout,
  login,
  getCurrentUser
};
