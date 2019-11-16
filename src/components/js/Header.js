import React from 'react'
import { Global, css } from '@emotion/core'
import img from '../img/profile.jpg'

export default function Header() {
    return (
        <header>
        <Global styles={css`
            header {
              background-color: #999;
              background-image: url(${img});
              background-repeat: no-repeat;
              background-position: center center;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              margin-bottom: 4em;
              text-align: center;
              height: 800px;
            }
          `}
        />
        <h1>
        <Global styles={css`
            header h1 {
                color: white;
                font-size: 3em;
                margin: 0;
                letter-spacing: 1px;
                opacity: 1;
                text-shadow: 0 3px 0 rgba(0,0,0, 0.5);
                position: relative;
                top: 610px;
                font-weight: 700;
            }
          `}
        />
        Sutanto Adi Nugroho</h1>
        <p>
        <Global styles={css`
            header p {
                color: #fff;
                font-size: 1.7em;
                padding-bottom: 1.3em;
                padding-top: .5em;
                opacity: .9;
                position: relative;
                top: 600px;
            }
          `}
        />
        Still Working</p>
      </header>
    )
}

