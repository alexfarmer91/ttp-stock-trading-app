import React from 'react';
import './App.css';
// import dotenv from 'dotenv'

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SECRET_KEY)
  }
  render() {
    return <div></div>
  }
}

export default App;
