import React, { Component } from 'react'
import portfolios from '../portfolio/portfolios'

class Portfolio extends Component {
    constructor(props) {
        super(props)
        const { match } = props

        this.state = {
            portfolioId: match.params.id
        }
    }

    componentDidUpdate(prevProps){
        const prevMatch = prevProps.match
        const { match } = this.props
        if(match.params.id != prevMatch.params.id){
            this.setState({portfolioId: match.params.id})
        }
    }

    render(){
        const{ portfolioId } = this.state
        const portfolio = portfolios.find((portfolio)=>portfolio.id == portfolioId)

        return(
            <div>
                <h1>{portfolio.title}</h1>
                <p>{portfolio.url}</p>
                <p>{portfolio.description}</p>

            </div>
        )

    }
}

export default Portfolio