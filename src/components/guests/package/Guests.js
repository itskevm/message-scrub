import React, { useState } from 'react'
import { css } from '@emotion/react'
import GuestList from '../../../assets/Guests.json'

const guestsCss = css`
  h2 {
    font-size: 18px;
    font-family: 'Oxygen', sans-serif;
  }
  margin-bottom: 24px;
  
  @media only screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`

const listCss = css`
  font-size: 28px;
  max-height: 190px;
  overflow: scroll;
  margin: 8px auto;
  background: #E6DDEE;
  border-radius: 5px;
  
  @media only screen and (min-width: 768px) {
    max-width: 400px;
  }
`

const labelCss = css`
  font-family: 'Oxygen', sans-serif;
  font-size: 20px;
  display: block;
  padding: 8px 6px;
  
  input {
    margin-right: 8px;
  }

  @media only screen and (min-width: 768px) {

  }
`

export default function Guests(props) {
  const [selectAll, setSelectAll] = useState(true)

  const selectToggle = () => {
    var inputy = document.querySelectorAll('input[type=checkbox]')
    setSelectAll(!selectAll)
    inputy.forEach(item => {
      item.checked = selectAll
    })
  }
  const handleChange = e => {
    props.onChange(e)
  }
  
  return (
    <div css={guestsCss}>
      <h2>Choose at least one guest:</h2>
      <span>(scrollable)</span>
      <div css={listCss}>
        {GuestList.map((item, index) => {
          return <label key={index} css={labelCss}>
            <input 
              type={'checkbox'}
              name={`checkbox-${item.id}`}
              value={item.id}
              checked={props.value[item.lastName]}
              onChange={handleChange} />
            {`${item.lastName}, ${item.firstName[0]} #${item.reservation.roomNumber}`}
            </label>
          })}
      </div>
      <button onClick={selectToggle}>{selectAll ? 'Select All' : 'Deselect All'}</button>
      <button>Load New Guest List</button>
    </div>
    )
  }