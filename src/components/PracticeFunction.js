import React, {useState, useEffect} from "react"

function PracticeFunciton() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  
  return(
    <div>
      <h1>Using Function Components</h1>
      <ul>
        {users.map(item => (
          <li>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default PracticeFunciton;