import React, { useEffect, useState } from 'react';

export default function usePetition(endpoint) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${API_URL}${endpoint}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return data;
}
