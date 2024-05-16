import React from 'react';
import './App.css';
import LocalTime from './LocalTime';

// function App() {}
/* return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
); */

// Ex:
/* const STUDENTS = [
  { id: 0, name: 'Nguyen Van D', address: 'HP' },
  { id: 1, name: 'Nguyen Van A', address: 'HN' },
  { id: 2, name: 'Nguyen Van B', address: 'DN' },
  { id: 3, name: 'Nguyen Van C', address: 'SG' }
];

return (
  <ul>
    {STUDENTS.map(student => (
      <li key={student.id}>
        <div>ID: {student.id}</div>
        <div>Name: {student.name}</div>
        <div>Address: {student.address}</div>
      </li>
    ))}
  </ul>
);
} */

// Prac:
/* class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
      </div>
    )
  }
} */

// Prac2:
/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      content: "Content from state..."
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
} */

function App() {
  return (
    <React.Fragment>
      <h1>Local Time:</h1>
      <LocalTime />
    </React.Fragment>
  )
}

export default App;
