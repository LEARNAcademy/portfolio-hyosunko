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
        portfolios: portfolios
    }
  }
  render() {
    const { portfolios } = this.state

    return(
      <Router>
        <div>
            <nav>
                <h2> Portfolios </h2>
                  <ul>
                    {portfolios.map((portfolio)=>
                      <li>
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
