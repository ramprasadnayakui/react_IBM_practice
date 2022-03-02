import React, { useState, useEffect } from 'react';

export default function Table() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  });

  return <div>Table</div>;
}
