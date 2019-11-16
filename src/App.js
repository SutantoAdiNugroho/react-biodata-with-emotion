import React from 'react';
import { Global, css } from '@emotion/core'
import Header from '../src/components/js/Header'
import Body from '../src/components/js/Body'
import Footer from '../src/components/js/Footer'

export default class App extends React.Component {
  render() {
    return (
      <body>
        <Global styles={css`
            body {
              font: 100% sans-serif;
              margin: 0em;
              background-color: #fff;
              color: #666;
            }
          `}
        />
         <Global styles={css`
           body h1, h2, h3 {
              font-family: 'Lato', sans-serif;
              font-weight: 300;
            }
          `}
        />
        <Header />
        <Body />
        <Footer />
      </body>      
    )
  }
}

