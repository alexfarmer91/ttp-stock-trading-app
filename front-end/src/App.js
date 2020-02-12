import React from 'react';
import Result from './components/Result.js'
import { Input, Button, Icon, Container, Grid, Statistic } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    searchInput: "",
    results: [],
    displayStock: ""
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

  render() {
    return (
      <Container>
        <Input
          placeholder='Search...'
          onChange={this.handleTickerChange}
          value={this.state.searchInput}
        />
        <Button icon='search' onClick={this.searchEndpoint} />
        {this.state.results.map(stockData => {
          return <Result key={stockData["1. symbol"]} symbol={stockData["1. symbol"]} stockName={stockData["2. name"]} />
        })}
      </Container>)
  }
}

export default App;
