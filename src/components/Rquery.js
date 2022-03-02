import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query';

export default function Raxios(){
  const { isLoading, error, data } = useQuery('fetchLuke', () =>
  axios('https://swapi.dev/api/people/1/'))

  return (
    <div className="Raxios">
      <h4>React Query example</h4>
      <h3> Overview</h3>
<p>React Query is often described as the missing data-fetching library for React, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your React applications a breeze.</p>

<h3>Motivation</h3>
<p>Out of the box, React applications do not come with an opinionated way of fetching or updating data from your components so developers end up building their own ways of fetching data. This usually means cobbling together component-based state and effect using React hooks, or using more general purpose state management libraries to store and provide asynchronous data throughout their apps.</p>
<p><strong>The above Axios example using react query, is as below</strong></p>
<p>Notice how in this code, we aren’t using the regular <i>useState</i> and <i>useEffect</i> hooks. This is because <i>useQuery</i> already has various values that we can use inside the application, such as <i>isLoading</i>,<i> error</i> response, and returned <i>data</i>.</p>
      {error && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
