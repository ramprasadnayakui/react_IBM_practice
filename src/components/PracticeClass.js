import React, {Component} from "react"

export default class PracticeClass extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({users: data}))
  }

  render(){
    return(
      <div>
       <h1>Using Class Components</h1>
      <ul>
        {this.state.users.map(item => (
          <li>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </div>
    )
  }

}