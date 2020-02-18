import React from 'react';
import SwitchBox from './components/SwitchBox.js'

class App extends React.Component {

  state = {
    userCash: 0,
    userPortfolio: [],
    session: false,
    loggedInUserId: null,
    token: null
  }

  setToken = (obj) => {

    const { token, user_id } = obj

    localStorage.token = token
    localStorage.user_id = user_id

    this.setState({
      token: token,
      loggedInUserId: user_id,
      session: true
    })
  }

  findPortfolio = (amount, stocksArray) => {
    this.setState({
      userCash: amount,
      userPortfolio: stocksArray
    })
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SECRET_KEY)
  }


  render() {
    return (
      <SwitchBox setToken={this.setToken} />
    )
  }
}

export default App;
