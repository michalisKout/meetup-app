import React, { useEffect } from 'react';
import axios from '../../api/axios.instance';

export default function TestComponent() {
  useEffect(() => {
    async function getCities() {
      const cities = await axios.get('cities');
      console.log(cities);
    }
    getCities();
  });
  return <div className="bg-red">hello this is real!</div>;
}
