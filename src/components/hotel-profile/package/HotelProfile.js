import React from 'react'
import { css } from '@emotion/react'
import CompanyList from './../../../assets/Companies.json'

const hotelProfileCss = css`
  h2 {
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }
  font-size: 28px;
  margin-bottom: 14px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`

const selectCss = css`
  font-family: 'Oxygen', sans-serif;
  font-size: 18px;
  border-color: #333331;
  border-radius: 0px;
  border-width: 2px;
  outline-color: #AE8FB1;
  width: 80%;
  margin: 10px 0;
  padding: 6px;
  text-align: center;
  
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 440px;
    padding: 8px;
    margin: 8px;
    width: 40%;
  }
`

export default function HotelProfile(props) {
  const handleChange = e => {
    props.onChange(e.target.value)
  }
  
  return (
    <div css={hotelProfileCss}>
      <h2>Select a hotel profile:</h2>
      <select css={selectCss} onChange={handleChange} defaultValue={'none'}>
        <option value={'none'} disabled key={0}>-- select --</option>
        {CompanyList.map((item, index) => {
          return <option value={item.id} key={index}>
            {item.company}
            </option>
          })}
          <option value={'new'} disabled key={CompanyList.length+1}>-- New Profile --</option>
      </select>
    </div>
    )
  }