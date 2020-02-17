import React from 'react';
import SwitchBox from './components/SwitchBox.js'

class App extends React.Component {

  state = {
    userPortfolio: {},
    userCash: 0,
    session: false
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SECRET_KEY)
  }


  render() {
    return (
      <SwitchBox />
    )
  }
}

export default App;
