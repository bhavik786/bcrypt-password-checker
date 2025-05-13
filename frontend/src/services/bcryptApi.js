import axios from "axios";

export const hashString = (plain) =>
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/hashString`, {
    stringToHash: plain,
  });

export const compareString = (plain, hashed) =>
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/compareString`, {
    normalString: plain,
    hashedString: hashed,
  });
