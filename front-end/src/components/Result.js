import React from 'react';
import { Statistic } from 'semantic-ui-react'

const Result = (props) => {
    return (<Statistic>
        <Statistic.Value>{props.symbol}</Statistic.Value>
        <Statistic.Label>{props.stockName}</Statistic.Label>
    </Statistic>)
}

export default Result;