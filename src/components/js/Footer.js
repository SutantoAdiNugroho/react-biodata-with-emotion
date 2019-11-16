import React from 'react'
import { Global, css } from '@emotion/core'
import styled from "@emotion/styled";

// const hrFooter = styled.hr`
//     margin-top: 2em;
//     margin-bottom: 1em;
// `;

export default function Footer() {
    return (
        <footer>
             <Global styles={css`
              footer {
                text-align: center;
                margin-bottom: 1em;
                color: #888;
            }
          `}
        />
        <hr className="hr">
        </hr>
        
        <span>
        &copy; Sutanto Adi Nugroho 2019
        </span>
        </footer>
    )
}
