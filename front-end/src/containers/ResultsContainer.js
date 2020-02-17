import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const ResultsContainer = (props) => {
    return (<Segment.Group style={{ width: '35%' }}>
        <Segment>Search Results</Segment>
        <Segment.Group>
            {props.results.map(result => {
                return <Segment onClick={() => props.resultClick(result["1. symbol"])} key={result["1. symbol"]}>{result["1. symbol"]} - {result["2. name"]}</Segment>
            })}
        </Segment.Group>
        <Segment><Button>Clear Search</Button></Segment>
    </Segment.Group>)
}

export default ResultsContainer