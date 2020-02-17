import React from 'react';
import DisplayCard from './components/DisplayCard.js'
// import { Redirect } from 'react-router-dom'
import SwitchBox from './components/SwitchBox.js'
import ResultsContainer from './containers/ResultsContainer.js'

import { Input, Button, Container } from 'semantic-ui-react'

class App extends React.Component {
  defaultStockData = {
    "01. symbol": null,
    "02. open": null,
    "03. high": null,
    "04. low": null,
    "05. price": null,
    "06. volume": null,
    "07. latest trading day": null,
    "08. previous close": null,
    "09. change": null,
    "10. change percent": null
  }
  state = {
    searchInput: "",
    results: [],
    displayStock: "",
    displayStockData: this.defaultStockData,
    userPortfolio: {},
    userCash: 0,
    session: false
  }

  resultClick = (value) => {
    let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${value}&apikey=${process.env.REACT_APP_SECRET_KEY}`
    fetch(url)
      .then(r => r.json())
      .then(response => {
        this.setState({
          displayStock: value,
          displayStockData: response["Global Quote"]
        })
      })
  }

  handleTickerChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  searchEndpoint = () => {
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchInput}&apikey=${process.env.REACT_APP_SECRET_KEY}`)
      .then(r => r.json())
      .then(response => {
        this.setState({
          results: response["bestMatches"]
        })
        console.log(response["bestMatches"])
      })
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_SECRET_KEY)
  }

  clearSearch = () => {
    this.setState({
      searchInput: "",
      results: [],
      displayStock: "",
      displayStockData: this.defaultStockData,
    })
  }

  render() {
    return (
      <Container>
        <Input
          placeholder='Search...'
          onChange={this.handleTickerChange}
          value={this.state.searchInput}
        />
        <Button icon='search' onClick={this.searchEndpoint} />
        <ResultsContainer results={this.state.results} resultClick={this.resultClick} clearSearch={this.clearSearch} />
        {this.state.displayStock === "" ? null : <DisplayCard symbol={this.state.displayStockData["01. symbol"]} price={this.state.displayStockData["05. price"]} change={this.state.displayStockData["10. change percent"]} volume={this.state.displayStockData["06. volume"]} />}
      </Container>)
  }
}

export default App;
