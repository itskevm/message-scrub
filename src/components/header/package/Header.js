import React from 'react'
import { css } from '@emotion/react'

const headerCss = css`
  background-color: #889BD3;
  overflow: hidden;
  font-family: 'Oxygen', sans-serif;
  a {  
    float: left;
    color: #333331;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      background-color: #434E74;
      color: white;
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
    display: flex;
    a {
      position: relative;
      animation: 0.8s ease-out 0s 1 slideInFromLeft;
    }
    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        left: -25px;
      }
      100% {
        opacity: 1;
        left: 0px;
      }
    }
  }
`

export default function Header() {
  
  return (
    <header css={headerCss}>
      <a href="#">Messages</a>
      <a href="#">Guest List</a>
      <a href="#">Tech Support</a>
    </header>
    )
  }