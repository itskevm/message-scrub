import React from 'react'
import { css } from '@emotion/react'

const footerCss = css`
  background: #434E74;
  color: white;
  font-size: 14px;
  font-family: 'Oxygen', sans-serif;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    text-align: center;
  }
`

export default function Footer() {
  
  return (
    <>
    <div css={footerCss}>
      <div>
          <p>Provided by KevMGaming © 2021</p>
      </div>
    </div>
    </>
    )
  }