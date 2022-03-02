import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Raxios(){
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios('https://swapi.dev/api/people/1/');

        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData()
  }, []);

  return (
    <div className="Raxios">
      <h4>React Axios example</h4>
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
