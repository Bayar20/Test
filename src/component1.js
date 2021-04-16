import React, { useEffect, useState } from 'react';
import './index.css';

const Component1 = () => {
  const [counter, setCounter]= useState(0);

  useEffect(() => {
    document.title = `Clicked ${ counter } times` ;
  },[counter])

  return (
    <div className="App">
      <h2>You clicked {counter} times! </h2>
      <button onClick={ () => setCounter(counter + 1)}> Click me!  </button>
    </div>
  )
}

// class Component1 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 0,
//     }
//   }
        
//   componentDidMount() {
//       document.title = `Hello React` ;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${ this.state.counter } times` ;
// }
 
//   render() {
//     return (
//       <div className="App">
//         <h2>You clicked {this.state.counter} times! </h2>
//         <button onClick={ () => this.setState({ counter: this.state.counter + 1})}> Click me!  </button>
//       </div>
//     )
//   }
// }

export default Component1;