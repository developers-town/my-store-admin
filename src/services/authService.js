import axios from "axios";
import jwtDecode from "jwt-decode";

export async function login(email, password) {
  try {
    return axios
      .post("https://nexious-store-api.herokuapp.com/api/staff/login", {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("userToken", response.data.payload.token);
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
  const jwt = localStorage.getItem("userToken");
  try {
    const user = jwtDecode(jwt);
    return user.id;
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("userToken");
}

export default {
  logout,
  login,
  getCurrentUser
};
