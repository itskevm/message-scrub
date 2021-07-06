import React, { useState } from 'react'
import { css } from '@emotion/react'

const messagesCss = css`
  color: #333331;
  border-radius: 5px;
  margin: 0px auto;
  h2 {
    font-size: 18px;
    font-family: 'Oxygen',sans-serif;
  }
  margin-bottom: 24px;
`

const templatesCss = css`
  background: #E6DDEE;
  margin: 8px auto;
  padding: 6px;
  max-width: 1100px;

  label {
    font-family: 'Oxygen';
  }
`

const containerCss = css`
  margin: 20px 0;
  padding: 0 8px;
  max-width: 990px;

  @media only screen and (min-width: 768px) {
    margin: 32px auto;
    line-height: 1;
  }

  label:hover {
    cursor: pointer;
  }

  input {
    margin-right: 14px;
  }

`

// For future reference (with index.js),
// export const onChange = e => {
//   console.log(e.target.value)
//   props.onNAMEHEREUpdate(e.target.value)
//   return e
// }

export function Greetings() {
  const templateGreetingA = ({greeting, guestName, hotelName, roomNumber}) => `${greeting} ${guestName}, and welcome to ${hotelName}! Room ${roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`
  const templateGreetingB = ({greeting, guestName, hotelName, roomNumber}) => `${greeting} ${guestName}, thank you for choosing to stay with us at ${hotelName} in Room ${roomNumber}. Feel free to let us know how we can make your stay more enjoyable!`
  const templateGreetingC = ({greeting, guestName, hotelName, roomNumber}) => `${greeting} ${guestName}, your check-in has been confirmed. You will be in Room ${roomNumber}. We are committed to your satisfaction and hope you will choose ${hotelName} again in the future.`
  const templateArray = [templateGreetingA,templateGreetingB,templateGreetingC]
  return templateArray
}

export default function Messages(props) {
  const [templateBox, setTemplateBox] = useState(false)
  const templateExampleValues = { greeting: "HELLO" , guestName: "GUEST", hotelName: "HOTEL", roomNumber: "NUMBER" }
  
  const greetings = []
  Greetings().forEach(item => {
    greetings.push(item(templateExampleValues))
  })

  const handleChange = e => {
    props.onChange(e.target.value)
  }

  const customy = e => {
    props.onChange(4)
  }

  return (
    <div css={messagesCss}>
      <h2>Select a template:</h2>
      <div css={templatesCss} onChange={handleChange}>
        {greetings.map((item, index) => {
          return <div css={containerCss} key={index}>
            <label><input type="radio" name={'template'} id={`radio-${index+1}`} value={index+1} key={index} />{item}</label>
          </div>
          })}
      </div>
      {!templateBox ?
        <button onClick={() => setTemplateBox(templateBox => !templateBox)}>Use Custom Greeting</button>
        :
        <div css={templatesCss} key={'4'}>
          <input autoFocus defaultChecked={true} onFocus={customy}  type="radio" name="template" id={'holy'} value={4} key={4} /> <label><textarea /></label>
        </div>
      }
      <button>Load New Templates</button>
    </div>
    )
  }