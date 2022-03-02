import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';

class reduxExa extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.state.name,
    };
    this.setState({
      name: '',
    });
    this.props.createContact(contact);
  }

  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button
            onClick={(e) => this.deleteContact(e, index)}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container">
        <h1>Clientside Contacts Application</h1>
        <h1>Redux learning source : </h1>
        <a href="https://www.valentinog.com/blog/redux/#react-redux-tutorial-what-is-a-redux-middleware">
          {' '}
          LINK{' '}
        </a>
        <h1>learning source : </h1>
        <a href="https://www.codingame.com/playgrounds/9169/simple-redux-create-delete-contact-application">
          {' '}
          LINK{' '}
        </a>
        <hr />
        <p>
        <strong>Action creators</strong> create objects of "type" and "payload", as "type" takes a string its better to declare it constant to avoid redundancy → <strong>objects/actions</strong> are dispatched to the store → <strong>the store</strong> invokes reducers and  forwards a message (the action object) to the reducer → <strong>reducers</strong> generate new state → <strong>listeners</strong> are notified of state updates.
          You might be surprised to know that Redux itself is a small library (2KB) and the most important methods are just three:

          <ul>
            <li><strong>getState</strong> for reading the current state of the application</li>
            <li><strong>dispatch</strong> for dispatching an action</li>
            <li><strong>subscribe</strong> for listening to state changes</li>
          </ul> 
        </p>
        <p>For React there is <strong>react-redux</strong>, a library for which you need to learn just <strong>one method for now: connect</strong>. What does it do? Unsurprisingly it <strong>connects a React component with the Redux store</strong>.</p>

        <ul>
        <li>a <strong>mapStateToProps</strong> function (you can name it also "select")</li>
        <li>a <strong>mapDispatchToProps</strong> function</li>
        </ul>
        <p><strong>mapStateToProps</strong> does exactly what its name suggests: <strong>it connects a part of the Redux state to the props of a React component</strong>. By doing so a connected React component will have access to the <strong>exact part of the store it needs</strong>.</p>
        <p>Finally We also need <strong>Provider</strong>, an high order component from react-redux to wrap up your React application and makes it aware of the entire Redux's store.</p>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.name}
            />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          {
            <ul className="list-group">
              {this.props.contacts.map((contact, i) =>
                this.listView(contact, i)
              )}
            </ul>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxExa);
