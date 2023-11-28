import http from "./httpService";

const userDataKey = process.env.REACT_APP_USER_KEY || "";
// const authApi = "/User/Onboarding/auth";

http.setToken(getToken());

// export function login(data: any) {
//   return http.post(authApi, data);
// }

export function getToken() {
  let token: any = localStorage.getItem(userDataKey);
  if (token) {
    return token;
  }
  return null;
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  //   login,
};
