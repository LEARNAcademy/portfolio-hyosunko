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
        console.log("portfolio.id", portfolios)
        console.log("portfolioUd", portfolioId)
        const portfolio = portfolios.find((portfolio)=>portfolio.id == portfolioId)
        
        return(
            <div class="project">
                <h2 class="project-tltle">{portfolio.title}</h2>
                <p class="project-desc">{portfolio.description}</p>
                <a href={portfolio.url} target="_blank" rel="noopener noreferrer" alt="project page" ><img src={portfolio.imgUrl} alt="battleship" /></a>

            </div>
        )

    }
}

export default Portfolio