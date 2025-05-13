import axios from "axios";

const BASE = process.env.REACT_APP_BACKEND_URL + "/api";

export const hashString = (plain) =>
  axios.post(`${BASE}/hashString`, { stringToHash: plain });

export const compareString = (plain, hashed) =>
  axios.post(`${BASE}/compareString`, {
    normalString: plain,
    hashedString: hashed,
  });
