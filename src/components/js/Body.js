import React from 'react'
import { Global, css } from '@emotion/core'

export default function Body() {
    return (
        <div className="container">
            <Global styles={css`
            .container {
                max-width: 50em;
                width:92%;
                margin-right: auto;
                margin-left: auto;
                margin-bottom: 100px;
            }
          `}
        /> 
        <section>
        <Global styles={css`
              section {
                text-align: center;
            }
          `}
        />
        <h1>
        <Global styles={css`
              section h1 {
                font-size: 1.9em;
                line-height: 1em;
                margin-bottom: .6em;
            }
          `}
        />
        Welcome!</h1>
        <p>
        <Global styles={css`
              section p {
                font-size: 1.1em;
                line-height: 1.8;
                margin-top: 0em;
            }
          `}
        />
        This is a good place to introduce yourself. What do you love to do? Where are you from? What is your current job?
		This also might be a good place to link to your resume, email, or portfolio as well. I am an energetic, ambitious
     person who has developed a mature and responsible approach to any task that I undertake, or situation that I 
     am presented with. As a graduate with three years’ experience in management, I am excellent in working with others to 
     achieve a certain objective on time and with excellence. In my previous role, I improved the performance, operations
      and productivity of my team by 35%..</p> 
        </section>  
        </div>
    )
}
