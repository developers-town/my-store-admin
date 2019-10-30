import axios from "axios";
import ENV from "../config/config.json";
import jwtDecode from "jwt-decode";

export async function login(email, password) {
  try {
    return await axios
      .post(ENV.API_ENDPOINT + "staff/login", {
        email,
        password
      })
      .then(response => {
        localStorage.setItem(ENV.APP_TOKEN, response.data.payload.token);
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
  const jwt = localStorage.getItem(ENV.APP_TOKEN);
  try {
    const user = jwtDecode(jwt);
    return user.username;
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(ENV.APP_TOKEN);
}

export default {
  logout,
  login,
  getCurrentUser
};
