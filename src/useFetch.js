import {useState} from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endpoint)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        resolve(data);
      })
      .catch(err => {
        setLoading(false);
        reject(err);
      });
    });
  }

  return {loading, get};
}