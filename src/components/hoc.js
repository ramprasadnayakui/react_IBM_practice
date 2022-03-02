import React from 'react';

var newData = {
   data: 'Data from HOC...',
}
/*
Let us take a look at a simple example to easily understand how this concept works. The "hoc" is a higher order function THAT IS USED ONLY TO PASS DATA TO MyComponent. This function takes MyComponent, enhances it with newData and returns the enhanced component that will be rendered on the screen.
*/
var hoc = ComposedComponent => class extends React.Component {
   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }
   render() {
      return <ComposedComponent {...this.state} />;
   }
};
class MyComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.data}</h1>
         </div>
      )
   }
}

export default hoc(MyComponent);