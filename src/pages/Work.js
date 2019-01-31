import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

import Portfolio from './Portfolio'
import portfolios from '../portfolio/portfolios'

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
        portfoliosLocal: portfolios
    }
  }
  render() {
    const { portfoliosLocal } = this.state

    return(
      <Router>
        <div class="portfolio">
            <nav>
                <h2> Portfolios </h2>
                  <ul class="portfolio-list">
                    {portfoliosLocal.map((portfolio)=>
                      <li class="portfolio-item">
                        <Link to={`/portfolio/${portfolio.id}`}>
                          {portfolio.title}<br/>
                        </Link>
                      </li>
                      )}
                  </ul>
            </nav>
            <hr/>
            <Switch>
              <Route
                path="/portfolio/:id"
                component={Portfolio}
               />
            </Switch>

        </div>

      </Router>

    )
  }
}

export default Work
