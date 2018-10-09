import { accessToken } from "../accessToken.js";

let accessToken1 = "";
if (accessToken) {
  accessToken1 = accessToken;
} else {
  accessToken1 = process.env.accessToken;
}

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getGithubNames = url => {
  return fetch(url + accessToken1)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};
